import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, getAllProducts, getAllUsers, getCategories, getSearchProducts, getSearchUsers, } from "../redux/actions";

export default function AdminSearchBar(props) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state)

  useEffect(() =>{
    dispatch(getCategories())
  }, [dispatch])

  const [user, setUser] = useState({
    username: '',
    email: '',
    name: '',
    lastName: ''
  });
  const [order, setOrder] = useState('');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');

  let value;
  if(props.search === 'users') value = user;
  if(props.search === 'orders') value = order;
  if(props.search === 'products') value = product;

  const handleInputChange = e => {
    e.preventDefault();
    if(props.search === 'orders') setOrder(e.target.value);
    if(props.search === 'products') setProduct(e.target.value);
  }

  const handleUserChange = e => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(props.search === 'users') dispatch(getSearchUsers(user));
    if(props.search === 'orders') dispatch(getAllOrders(order, status));
    if(props.search === 'products') dispatch(getSearchProducts(product, category));
  }

  const cleanState = e => {
    e.preventDefault();
    setUser({
      username: '',
      email: '',
      name: '',
      lastName: ''
    });
    setOrder('');
    setStatus('');
    setProduct('');
    if(props.search === 'users') dispatch(getAllUsers());
    if(props.search === 'orders') dispatch(getAllOrders());
    if(props.search === 'products') dispatch(getAllProducts());
  }

  const handleSelect = (event) => {
    if(props.search === 'orders') setStatus(event.target.value)
    if(props.search === 'products') setCategory(event.target.value)
  }

  return (
    <div className="container">
      <div className="searchBar">
        {props.search === 'users' && <>
        <input name="username" value={user.username} placeholder={`Search username`} onChange= {handleUserChange} className="searchBar__searching"/>
        <input name="email" value={user.email} placeholder={`Search email`} onChange= {handleUserChange} className="searchBar__searching"/>
        <input name="name" value={user.name} placeholder={`Search name`} onChange= {handleUserChange} className="searchBar__searching"/>
        <input name="lastName" value={user.lastName} placeholder={`Search lastname`} onChange= {handleUserChange} className="searchBar__searching"/>
        </>}

        {props.search !== 'users' && <input value={value} placeholder={`Search ${props.search}`} onChange= {handleInputChange} className="searchBar__searching"/>}
        {props.search === 'orders' && <select onChange={handleSelect} value={status}>
          <option value='' hidden disabled>Order Status</option>
        <option key='pending' value='pending'>Pending</option>
        <option key='processing' value='processing'>Processing</option>
        <option key='complete' value='complete'>Complete</option>
        <option key='canceled' value='canceled'>Canceled</option>
        </select>}
        {props.search === 'products' && <select onChange={handleSelect} value={category}>
          <option value=''>All Categories</option>
          {categories?.map((ca,i) => <option key={i} value={ca.name}>{ca.name}</option>)}
        </select>}
        <button type='submit' onClick={e => handleSubmit(e)} className="searchBar__btn">Search</button>
        <button type='reset' onClick={e => cleanState(e)} className="searchBar__btn" >Reset Filters</button>
      </div>
    </div>
  )
}
