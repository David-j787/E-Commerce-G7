import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions';
import Products from '../components/Products';

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []); //eslint-disable-line

  return (
    <div className="container shop">
      <h2 className="shop__title">SHOP</h2>

      {!Array.isArray(products) ? (
        <h2>{products}</h2>
      ) : (
        <Products products={products} />
      )}
    </div>
  );
};

export default Home;
