import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../redux/actions";
import axios from 'axios';
import Select from 'react-select'
import CreateCategory from "./CreateCategory";
import swal from 'sweetalert';
import { FormattedMessage } from 'react-intl'

export function validate(input) {

    let errors = {};
  
    if (!input.name) {
      errors.name = "Introduce the product name";
    } 
    else if (input.name.length < 4) {
        errors.name = "Product name is too short";
    } 
    else if (!input.price) {
        errors.price = "Introduce the product price"
    } 
    else if (!/^-?\d+\.?\d*$/.test(input.price)){
        errors.price = "Only numbers allowed"
    }
    else if(!input.description){
       errors.description = "Write a brief description of your product"
    }
    else if(!input.stock){
        errors.stock = "Stock number"
    } 
    else if (!/^-?\d+\.?\d*$/.test(input.stock)){
        errors.stock = "Only numbers allowed"
    }
    else if(!input.categories.length){
        errors.categories = "Select the categories or create a new one"
    }
    return errors;
}


export function CreateProduct(){
    const dispatch = useDispatch();
    const stateCategories = useSelector((state)=>state.categories)
    

    const options = stateCategories.map((e)=> {
        return {label: e.name, value: e.id}
    })

    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        name: "",
        price: "",
        description:"",
        images:"",
        stock: 0,
        rating: 0,
        categories:[]
    })

    useEffect(() => {
        dispatch(getCategories());
    }, []); //eslint-disable-line

    const handleChange = (e) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }));
    }

    const handleSelect = (e) =>{
        setInput({
            ...input,
            categories: e?.map(x => x.label)
        })
        setErrors(validate({
            ...input,
            categories: e?.map(x => x.label)
        }));
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await axios.post("/product", input)
        if(response.status === 200){
            swal({
                title: 'Product was created successfully!',
                text: ' ',
                icon: 'success',
                timer: 3000,
                button: null
            })
            setInput({
                name: "",
                price: "",
                description:"",
                images:"",
                stock: 0,
                rating: 0,
                categories:[]
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
                <h1 className="register__title"><FormattedMessage id="app.new-product" defaultMessage="New Product"/></h1>
                <form onSubmit={(e)=>{handleSubmit(e)}} action="" method="post"  id="contact_form">
                    <div className="register__group">
                        <label className="col-md-4 control-label"><FormattedMessage id="app.name-prod" defaultMessage="Name"/></label>
                        <input name="name" value={input.name} onChange={handleChange} className="form-control" />
                        <div className="register__error">{errors.name}</div>
                    </div>
                    <div className="register__group">
                        <label className="col-md-4 control-label"><FormattedMessage id="app.price" defaultMessage="Price"/></label>
                        <input name="price" value={input.price} onChange={handleChange} className="form-control"/>
                        <div className="register__error">{errors.price}</div>
                    </div>
                    <div className="register__group">
                        <label className="col-md-4 control-label"><FormattedMessage id="app.description" defaultMessage="Description"/></label>
                        <textarea name="description" value={input.description} onChange={handleChange} className="form-control"></textarea>
                        <div className="register__error">{errors.description}</div>
                    </div>
                    <div className="register__group">
                        <label className="col-md-4 control-label"><FormattedMessage id="app.image" defaultMessage="Image"/></label>
                        <input name="images" value={input.images} onChange={handleChange} className="form-control"/>
                    </div>
                    <div className="register__group">
                        <label className="col-md-4 control-label"><FormattedMessage id="app.stok-prod" defaultMessage="Stock"/></label>
                        <input type='number' min='0' max='100' name="stock" value={input.stock} onChange={handleChange} className="form-control"/>
                        <div className="register__error">{errors.stock}</div>
                    </div>
                    <div className="register__group categories">
                        <label className="col-md-4 control-label"><FormattedMessage id="app.categories" defaultMessage="Categories"/></label>
                        <div style={{width:'100%'}}>
                            <Select isMulti options={options} onChange={handleSelect}/>
                        </div>
                        <CreateCategory />
                        <div className="register__error">{errors.categories}</div>
                    </div>
                    <button className="register__button"
                     type="submit"
                     disabled={!input.name || !input.price || !input.description || !input.stock || !input.categories.length}><FormattedMessage id="app.btn-create-prod" defaultMessage="Create product"/></button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct;