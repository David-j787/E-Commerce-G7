import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../redux/actions";
import '../styles/styles.scss';
import swal from 'sweetalert';

export function CreateCategory(){
    const categories = useSelector((state)=>state.categories)
    const [nameCategory, setNameCategory] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        setNameCategory(e.target.value)
    }

    const validateCategory = (name) =>{
        let validate = categories.map(ctg => ctg.name)
        return validate.includes(name)
    }

    const handleAdd = async (e) =>{
        e.preventDefault();
        if(validateCategory(nameCategory)){
            swal({
                title: 'This category already exists',
                text: ' ',
                icon: 'error',
                timer: 3000,
                button: null
            })
            
        }else{
            const response = await axios.post("/category", {nameCategory: nameCategory})
            if(response.status === 200){
                swal({
                    title: 'Category was created successfully!',
                    text: ' ',
                    icon: 'success',
                    timer: 3000,
                    button: null
                })
            }
            dispatch(getCategories())
        }
    }
    return(
        <div style={{display: "flex", alignItems: "center"}}>
            <input placeholder="Introduce the name of the new category..." onChange={handleChange} className="form-control"/>
            <button style={{margin: 0, border: "2px solid transparent", height: "3.1rem"}} className="register__button" type="submit" onClick={handleAdd} disabled={!nameCategory}>Add category</button>
        </div>
    )
}

export default CreateCategory;