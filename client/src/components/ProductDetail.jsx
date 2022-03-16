import React from 'react'

export function ProductDetail(props){

    return(
        <div>
            <Card>
                <h1>{props.product.name}</h1>
                <img src={props.product.images}/>
                <h3>{props.product.description}</h3>
                <h2>{props.product.price}</h2>
            </Card>
        </div>
    )
}

export default ProductDetail