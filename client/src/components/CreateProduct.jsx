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
    } 
    else if (!/^[^\W0-9_][a-zA-Z0-9\s]+$/.test(input.name)){
      errors.name = "Invalid name";
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
    else if(!/^-?\d+\.?\d*$/.test(input.rating)){
        errors.rating = "Only numbers allowed"
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
        <div className="container">
            <h1>New Product</h1>
            <form onSubmit={(e)=>{handleSubmit(e)}} style={{width:'30%'}} className="well form-horizontal" action=" " method="post"  id="contact_form">
                <div className="form-group">
                <label className="col-md-4 control-label">Name</label>
                <input name="name" value={input.name} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.name}</div>
                </div>
                <div className="form-group">
                <label className="col-md-4 control-label">Price</label>
                <input name="price" value={input.price} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.price}</div>
                </div>
                <div className="form-group">
                <label className="col-md-4 control-label">Description</label>
                <input name="description" value={input.description} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.description}</div>
                </div>
                <div className="form-group">
                <label className="col-md-4 control-label">Image</label>
                <input name="images" value={input.images} onChange={handleChange} className="form-control"/>
                </div>
                <div className="form-group">
                <label className="col-md-4 control-label">Stock</label>
                <input type='number' min='0' max='100' name="stock" value={input.stock} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.stock}</div>
                </div>
                <div className="form-group">
                <label className="col-md-4 control-label">Rating</label>
                <input type='number' min='0' max='5' name="rating" step="0.1" value={input.rating} onChange={handleChange} className="form-control"/>
                <div style={{color:'red'}}>{errors.rating}</div>
                </div>
                <div className="form-group">
                <label className="col-md-4 control-label">Categories</label>
                <div style={{width:'100%'}}>
                <Select isMulti options={options} onChange={handleSelect}/>
                </div>
                <CreateCategory />
                <div style={{color:'red'}}>{errors.categories}</div>
                </div>
                <input className="btn btn-warning" type="submit" disabled={!input.name || !input.price || !input.description || !input.rating || !input.stock || !input.categories.length} value="Create product"/>
                </form>
        </div>
    )
}

export default CreateProduct;