import React, { useState } from "react";

export default function SearchBar() {

  const [name, setName] = useState('');

  const handleInputChange = e => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
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