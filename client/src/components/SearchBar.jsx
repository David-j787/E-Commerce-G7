import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchProducts } from "../redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleInputChange = e => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      getSearchProducts(name)
    )
  }

  const cleanState = e => {
    e.preventDefault();
    setName('');
  }

  return (
      <div>
        <input value={name} placeholder="Search…" onChange= {handleInputChange}/>
        <input type='submit' value='Search' onClick={e => handleSubmit(e)}/>
        <input type='reset' value='Clean' onClick={e => cleanState(e)}/>
      </div>
  )
}