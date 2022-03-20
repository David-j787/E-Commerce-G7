import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProductDetail } from '../redux/actions';
import axios from 'axios';

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
    if(!input.categories.length===0){
        errors.categories = "Choose the categories"
    }
    return errors;
}


export function UpdateProduct(props){
    const dispatch = useDispatch();
    const id = props.match.params.id;

    const productDetails = useSelector((state)=>state.details)
    const stateCategories = useSelector((state)=>state.categories)

    useEffect(()=>{
        dispatch(getProductDetail(id))
        dispatch(getCategories());
        
        
    }, [id])

    const [errors, setErrors] = useState({})

    useEffect(()=>{
        setInput({
            name: productDetails.name,
            price: productDetails.price,
            description:productDetails.description,
            images:productDetails.images,
            stock: productDetails.stock,
            rating: productDetails.rating,
            categories: productDetails.categories?.map(e=>e.name)
        })
    }, [productDetails])
    
    const [input, setInput] = useState({})

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
        if(input.categories.includes(e.target.value)) return;
        setInput({
            ...input,
            categories: [...input.categories, e.target.value]
        })
        // setErrors(validate({
        //     ...input,
        //     categories : [...input.categories, e.target.value]
        // }));
    }
    const handleDelete = event => {
        setInput({
            ...input,
            categories: input.categories?.filter(category => category !== event.target.id)
        })
    }

    const handleSubmit = async (e) => {
        const product = {...input, id}
        e.preventDefault();
        await axios.put("http://localhost:3001/product/update", product)
        alert(`${input.name} was updated!`)
    }

    return (
         <div className="container">
            <h1>Update Product</h1>
            <form onSubmit={(e)=>{handleSubmit(e)}} style={{width:'30%'}} className="well form-horizontal">
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
                <div style={{color:'red'}}>{errors.images}</div>
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
                <select className="form-control" defaultValue='none' name="categories" onChange={handleSelect} autoComplete='off'>
                <option value="none" disabled hidden>Choose one or more</option>
                {stateCategories?.map(category => <option key={category.id} value={category.name}>{category.name}</option>)}
                </select>
                </div>
                <div className="formWrapper"><div className="addedCat">{input.categories?.map(category => <div key={category} className="catContainer"><div className="category">{category}</div><div className="deleteCat" id={category} onClick={handleDelete}>x</div></div>)}</div></div>
                </div>
                <div>
                <input className="btn btn-warning" type="submit" value="Back"/>
                <input className="btn btn-warning" type="submit" disabled={!input.name || !input.price || !input.description || !input.rating || !input.stock || !input.categories.length} value="Save"/>
                </div>
                </form> 
        </div>
    )
}

export default UpdateProduct;