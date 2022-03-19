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
      <div>
        <input value={name} placeholder="Search…" onChange= {handleInputChange}/>
        <select onChange={handleSelect} value={filter}>
          <option value={''}>Categorias...</option>
        {categories?.map((ca,i) => {
          return <option key={i} value={ca.name}>
            {ca.name}
          </option>
        })}
        </select>
        <input type='submit' value='Search' onClick={e => handleSubmit(e)}/>
        <input type='reset' value='Clean' onClick={e => cleanState(e)}/>
      </div>
  )
}
