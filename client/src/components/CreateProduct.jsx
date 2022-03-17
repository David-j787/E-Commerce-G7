import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../redux/actions";
import { Link } from "react-router-dom";
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
    if(!input.category.length){
        errors.category = "Select the categories or create a new one"
    }
    return errors;
}


export function CreateProduct(){
    const dispatch = useDispatch();
    const stateCategories = useSelector((state)=>state.categories)

    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        name: "",
        price: "",
        description:"",
        image:"",
        stock: 0,
        rating: 0,
        category:[]
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

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setInput({
            name: "",
            price: "",
            description:"",
            image:"",
            stock: 0,
            rating: 0,
            category:[]
        })
        await axios.post("http://localhost:3001/product", input)
        alert(`${input.name} was created successfully!`)
    }

    return(
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <div>
                <label>Name</label>
                <input name="name" value={input.name} onChange={handleChange}/>
                <div>{errors.name}</div>
                </div>
                <div>
                <label>Price</label>
                <input name="price" value={input.price} onChange={handleChange}/>
                <div>{errors.price}</div>
                </div>
                <div>
                <label>Description</label>
                <input name="description" value={input.description} onChange={handleChange}/>
                <div>{errors.description}</div>
                </div>
                <div>
                <label>Image</label>
                <input name="image" value={input.image} onChange={handleChange}/>
                </div>
                <div>
                <label>Stock</label>
                <input name="stock" value={input.stock} onChange={handleChange}/>
                <div>{errors.stock}</div>
                </div>
                <div>
                <label>Rating</label>
                <input name="rating" value={input.rating} onChange={handleChange}/>
                <div>{errors.rating}</div>
                </div>
                <div>
                <label>Category</label>
                <select>
                <option disabled selected>Select categories...</option>
                {stateCategories.map((op, i) =>{
                    return <option value={op.id} key={i}>{op.name}</option>
                })}</select>
                <Link><button>Create category</button></Link>
                <div>{errors.category}</div>
                </div>
                <button type="submit">Create product</button>
                </form>
        </div>
    )
}

export default CreateProduct;