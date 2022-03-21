import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductDetail, addProduct, productAmountSum } from '../redux/actions';

export function ProductDetail(props) {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const { details, cart } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getProductDetail(id));
    }, []); //eslint-disable-line

    const handleAddCart = (product) => {
        const cartProduct = cart.filter(Product => Product.id === product.id)
        if (cartProduct.length && cartProduct[0].stock > cartProduct[0].amount)
            return dispatch(productAmountSum(product.id))
        if (!cartProduct.length) {
            product.amount = 1
            dispatch(addProduct(product))
        }
    }

    const buttonDisabled = details.stock <= 0 ? true : false

    const borrarEsto = {
        marginLeft: "50px",
        marginBottom: "50px"
    }

    return (
        <div>
            {details ?
                <div style={borrarEsto}>
                    <h1>{details.name}</h1>
                    <img src={details.images} alt="product" width='350px' height='250px' />
                    <h3>{details.stock}</h3>
                    <h3>{details.description}</h3>
                    <h2>{details.price}</h2>
                    <h3>{details.categories?.map(el => <li key={el.id}>{el.name}</li>)}</h3>
                    <h2>{details.rating}</h2>
                    <button disabled={buttonDisabled} onClick={() => handleAddCart(details)}>add product</button>
                    <Link to={`/product/update/${id}`}><button>Edit product</button></Link>
                </div>
                : (<h2>Loading...</h2>)}
        </div>
    )
}

export default ProductDetail;
