import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import '../styles/styles.scss'

export function CreateCategory(){

    const categories = useSelector((state)=>state.categories)
    const [nameCategory, setNameCategory] = useState({
        nameCategory : ""
    });

    const handleChange = (e) =>{
        setNameCategory({
            nameCategory: e.target.value
        })
    }

    const validateCategory = (name) =>{
        let validate = categories.map(ctg => ctg.name)
        return validate.includes(name)
    }

    const handleAdd = async (e) =>{
        e.preventDefault();
        if(validateCategory(nameCategory.nameCategory)){
            alert('This category already exists')
        }else{
            await axios.post("http://localhost:3001/category", nameCategory)
            setNameCategory({nameCategory:""})
            alert('Category added successfully!')
        }
    }
    return(
        <div>
            <input placeholder="Introduce the name of the new category..." onChange={handleChange} class="col-md-4 inputGroupContainer"/>
            <button onClick={handleAdd} disabled={!nameCategory.nameCategory}>Add category</button>
        </div>
    )
}

export default CreateCategory;