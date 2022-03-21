import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getSearchProducts, } from "../redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state)

  useEffect(() =>{
    dispatch(getCategories())
  }, [dispatch])

  const [name, setName] = useState('');
  const [filter, setFilter] = useState('');

  const handleInputChange = e => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getSearchProducts(name, filter))
  }

  const cleanState = e => {
    e.preventDefault();
    setName('');
    setFilter('');
    dispatch(getSearchProducts('', ''))
  }

  const handleSelect = e => {
    e.preventDefault();
    setFilter(e.target.value);
    dispatch(getSearchProducts(name, e.target.value))
  }

  return (
    <div className="container">
      <div className="searchBar">
        <input value={name} placeholder="Search…" onChange= {handleInputChange} className="searchBar__searching"/>
        <select onChange={handleSelect} value={filter}>
          <option value=''>All Categories</option>
        {categories?.map((ca,i) => {
          return <option key={i} value={ca.name}>
            {ca.name}
          </option>
        })}
        </select>
        <button type='submit' onClick={e => handleSubmit(e)} className="searchBar__btn">Search</button>
        <button type='reset' onClick={e => cleanState(e)} className="searchBar__btn" >Reset Filters</button>
      </div>
    </div>
  )
}
