import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, userLogin } from '../redux/actions';
import Products from '../components/Products';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  console.log(products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(()=> {
    if(localStorage.getItem('jwt')){
      axios.post('http://localhost:3001/authenticate', {token: localStorage.getItem('jwt')})
      .then(res => {
        dispatch(userLogin(res.data.user))
      })
      .catch(res => localStorage.removeItem('jwt'))
    }
  }, [])  

  return (
    <div className="container shop">
      <h2 className="shop__title">SHOP</h2>

      {products.length === 0 ? (
        <h2>Cargando...</h2>
      ) : (
        <Products products={products} />
      )}
    </div>
  );
};

export default Home;
