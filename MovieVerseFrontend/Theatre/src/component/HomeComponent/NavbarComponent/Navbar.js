import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './DropDownComponent/Dropdown.js';
import "./Navbar.css";
import SearchBar from './SearchBarComponent/SearchBar.js';
const Navbar = () => {
    const [dropdown,setDropdown]=useState(false);
  return (
    <nav className='navBar'>
      <Link to="/home" className='logo'>
        <img src="../MovieVerseLogo.jpg" alt="Logo"/>
      </Link>
      <SearchBar />
      <Link className='profile'> 
      <i className='fas fa-user-circle' onClick={()=>setDropdown(!dropdown)}></i>
      </Link>
      {dropdown&&<Dropdown/>}
    </nav>
  )
}

export default Navbar
