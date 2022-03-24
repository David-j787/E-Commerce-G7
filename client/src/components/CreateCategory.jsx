import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../redux/actions";
import '../styles/styles.scss'

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
            alert('This category already exists')
            
        }else{
            await axios.post("/category", {nameCategory: nameCategory})
            alert('Category added successfully!')
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