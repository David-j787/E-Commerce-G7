import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../redux/actions";
import axios from 'axios';
import Select from 'react-select'
import CreateCategory from "./CreateCategory";
import '../styles/styles.scss'

export function validate(input) {

    let errors = {};
  
    if (!input.name) {
      errors.name = "Introduce the product name";
    } else if (!/^[^\W0-9_][a-zA-Z0-9\s]+$/.test(input.name)){
      errors.name = "Invalid name";
    }
    if (!input.price) {
        errors.price = "Introduce the product price"
    } else if (!/^-?\d+\.?\d*$/.test(input.price)){
        errors.price = "Only numbers allowed"
    }
    if(!input.description){
       errors.description = "Write a brief description of your product"
    }
    if(!input.stock){
        errors.stock = "Stock number"
    } else if (!/^-?\d+\.?\d*$/.test(input.stock)){
        errors.stock = "Only numbers allowed"
    }
    if(!/^-?\d+\.?\d*$/.test(input.rating)){
        errors.rating = "Only numbers allowed"
    }
    if(!input.categories.length){
        errors.categories = "Select the categories or create a new one"
    }
    return errors;
}


export function CreateProduct(){
    const dispatch = useDispatch();
    const stateCategories = useSelector((state)=>state.categories)
    
    //const mockCategories = ["Computers", "Audio", "Videogames", "Tablets"]

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
    }, []);

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
            categories: (Array.isArray(e) ? e.map(x => x.label) : [])
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/product", input)
        alert(`${input.name} was created successfully!`)
        setInput({
            name: "",
            price: "",
            description:"",
            images:"",
            stock: 0,
            rating: 0,
            categories:[]
        })
    }
    
    return(
        <div class="container">
            <form onSubmit={(e)=>{handleSubmit(e)}} class="well form-horizontal" action=" " method="post"  id="contact_form">
                <div class="form-group">
                <label class="col-md-4 control-label">Name</label>
                <input name="name" value={input.name} onChange={handleChange} class="col-md-4 inputGroupContainer"/>
                <div>{errors.name}</div>
                </div>
                <div class="form-group">
                <label class="col-md-4 control-label">Price</label>
                <input name="price" value={input.price} onChange={handleChange} class="col-md-4 inputGroupContainer"/>
                <div>{errors.price}</div>
                </div>
                <div class="form-group">
                <label class="col-md-4 control-label">Description</label>
                <input name="description" value={input.description} onChange={handleChange} class="col-md-4 inputGroupContainer"/>
                <div>{errors.description}</div>
                </div>
                <div class="form-group">
                <label class="col-md-4 control-label">Image</label>
                <input name="images" value={input.images} onChange={handleChange} class="col-md-4 inputGroupContainer"/>
                </div>
                <div class="form-group">
                <label class="col-md-4 control-label">Stock</label>
                <input type='number' min='0' max='100' name="stock" value={input.stock} onChange={handleChange} class="col-md-4 inputGroupContainer"/>
                <div>{errors.stock}</div>
                </div>
                <div class="form-group">
                <label class="col-md-4 control-label">Rating</label>
                <input type='number' min='0' max='5' name="rating" step="0.1" value={input.rating} onChange={handleChange} class="col-md-4 inputGroupContainer"/>
                <div>{errors.rating}</div>
                </div>
                <div class="form-group">
                <label class="col-md-4 control-label">Categories</label>
                <div style={{width:'30%'}}>
                <Select isMulti options={options} onChange={handleSelect}/>
                </div>
                <CreateCategory />
                <div>{errors.categories}</div>
                </div>
                <input class="btn btn-primary btn-lg" type="submit" disabled={!input.name || !input.price || !input.description || !input.rating || !input.stock || !input.categories.length} value="Create product"/>
                </form>
        </div>
    )
}

export default CreateProduct;