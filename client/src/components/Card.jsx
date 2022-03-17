import React from 'react';


export function Card({id,name, price, rating,category}) {
    const producto1 = {image:"https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",name:"Laptop",price:500,rating:5,category:"Electronics"};
    return(<div>



        <div className='Card' >
            <h3 className='fontHome' >{producto1.name}</h3>
            <img className='fontHome'  src={producto1.image} alt='imageProduct' width='250px' height='125px' />
            <h4 className='fontHome' > Price: {producto1.price}</h4>
            <h4 className='fontHome' > Category:{producto1.category}</h4>
            <h4 className='fontHome' > Rating:{producto1.rating}</h4>
            <div className='groupButton' >                
                <button className='cardButton' >Details</button>
                <button className='cardButton' >+</button>
            </div>
        </div>
    </div>
    )
};

export default Card;