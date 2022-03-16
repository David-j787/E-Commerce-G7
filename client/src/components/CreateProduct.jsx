import React, { useState } from "react";

export function validate(input) {

    let errors = {};
  
    if (!input.name) {
      errors.name = "Introduce the product name";
    } else if (!/^[^\W0-9_][a-zA-Z0-9\s]+$/.test(input.name)){
      errors.name = "Invalid name";
    }
    if (!input.price) {
        errors.price = "Introduce the product price"
    } else if (/^-?\d+\.?\d*$/.test(input.price)){
        errors.price = "Only numbers allowed"
    }
    if(!input.description){
       errors.description = "Write a brief description of your product"
    }
    if(!input.stock){
        errors.stock = "Introduce the stock"
    } else if (/^-?\d+\.?\d*$/.test(input.stock)){
        errors.stock = "Only numbers allowed"
    }
    if(!input.category){
        errors.category = "Select the categories or create a new one"
    }
}


export function CreateProduct(){

    const [input, setInput] = useState({
        name: "",
        price: "",
        description:"",
        image:"",
        stock: 0,
        rating: 0,
        category:[]
    })

    const handleChange = (e) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div>
            <form>
                <div>
                <label>Name</label>
                <input name="name" value={input.name} onChange={handleChange}/>
                </div>
                <div>
                <label>Price</label>
                <input name="price" value={input.price} onChange={handleChange}/>
                </div>
                <div>
                <label>Description</label>
                <input name="description" value={input.description} onChange={handleChange}/>
                </div>
                <div>
                <label>Image</label>
                <input name="image" value={input.image} onChange={handleChange}/>
                </div>
                <div>
                <label>Stock</label>
                <input name="stock" value={input.stock} onChange={handleChange}/>
                </div>
                <div>
                <label>Rating</label>
                <input name="rating" value={input.rating} onChange={handleChange}/>
                </div>
                <div>
                <label>Category</label>
                <input name="category" value={input.category} onChange={handleChange}/>
                <Link to='/create-category'><button>Create category</button></Link>
                </div>
                <button>Create product</button>
                </form>
        </div>
    )
}

export default CreateProduct;