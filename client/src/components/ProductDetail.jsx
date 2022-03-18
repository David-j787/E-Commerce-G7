import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductDetail } from '../redux/actions';

export function ProductDetail({ id, name, price, images }) {
  const dispatch = useDispatch();
  // const id = props.match.params.id;
  const { details } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, []);

  return (
    <>
      {details ? (
        <Link to={`/product/${id}`} className="products__item">
          <figure>
            <img src={images} alt="images" />
          </figure>
          <h3>{name}</h3>
          <span>{price}</span>
        </Link>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

export default ProductDetail;
