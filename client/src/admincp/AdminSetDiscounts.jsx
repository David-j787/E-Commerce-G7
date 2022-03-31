import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../redux/actions";
import axios from 'axios';
import Select from 'react-select'
import CreateCategory from "../components/CreateCategory";
import swal from 'sweetalert';

export function validate(discount) {
    let errors = {};

    if(!discount.category.length){
        errors.category = "Select a categoriy or create a new one"
    }
    else if(!discount.discount){
        errors.discount = "Set a Discount"
    } 
    else if (!/^-?\d+\.?\d*$/.test(discount.discount)){
        errors.discount = "Only numbers allowed"
    }
    return errors;
}


export function AdminSetDiscounts(){
    const dispatch = useDispatch();
    const stateCategories = useSelector((state)=>state.categories)
    
    const options = stateCategories.map((e)=> {
        return {label: e.name, value: e.id}
    })

    const [errors, setErrors] = useState({})

    const [discount, setDiscount] = useState({
        category: '',
        discount: 0
    })

    useEffect(() => {
        dispatch(getCategories());
    }, []); //eslint-disable-line

    const handleChange = (e) =>{
        setDiscount({
            ...discount,
            [e.target.name]: e.target.value,
        })
        setErrors(validate({
            ...discount,
            [e.target.name] : e.target.value
        }));
    }

    const handleSelect = (e) =>{
        setDiscount({
            ...discount,
            categories: e?.map(x => x.label)
        })
        setErrors(validate({
            ...discount,
            categories: e?.map(x => x.label)
        }));
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await axios.post("/discount", discount)
        if(response.status === 200){
            swal({
                title: 'Discount was set successfully!',
                text: ' ',
                icon: 'success',
                timer: 3000,
                button: null
            })
            setDiscount({
                categories:''
            })
        }else {
            swal({
                title: 'Something went wrong',
                text: ' ',
                icon: 'error',
                timer: 3000,
                button: null
            })
        }

    }

    return(
        <div className="adminContainer editForms">
            <div className="register createProduct">
                <h1 className="register__title">New Discount</h1>
                <form onSubmit={(e)=>{handleSubmit(e)}} action="" method="post"  id="contact_form">
                    <div className="register__group categories">
                        <label className="col-md-4 control-label">Categories</label>
                        <div style={{width:'100%'}}>
                            <Select options={options} onChange={handleSelect}/>
                        </div>
                        <div className="register__error">{errors.categories}</div>
                        <CreateCategory />
                    </div>
                    <div className="register__group">
                        <label className="col-md-4 control-label">Discount</label>
                        <input type='number' min='0' max='100' name="discount" value={discount.discount} onChange={handleChange} className="form-control"/>
                        <div className="register__error">{errors.discount}</div>                     
                    </div>
                    <button className="register__button"
                     type="submit"
                     disabled={!discount.discount || !discount.category.length}>Create Discount</button>
                </form>
            </div>
        </div>
    )
}

export default AdminSetDiscounts;