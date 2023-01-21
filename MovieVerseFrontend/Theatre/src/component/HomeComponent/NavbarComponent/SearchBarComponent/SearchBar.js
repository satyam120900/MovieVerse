import React, { useState } from 'react';
import "./SearchBar.css";

const SearchBar = () => {
  const [search,setSearch]=useState(true);
  return (
    <div className={search?'searchbar':'searchbarAfter'}>
      <button type='submit' onClick={()=>setSearch(!search)}><i className='fas fa-search'/></button>
      <input type="search" placeholder='Search for Movies'/>      
    </div>
  )
}

export default SearchBar
