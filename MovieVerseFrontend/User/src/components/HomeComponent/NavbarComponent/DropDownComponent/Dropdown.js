import React, { useState } from 'react'
import { profile } from '../NavItems'
import "./Dropdown.css";
const Dropdown = () => {
    const [dropdown,setDropdown]=useState(false);

  return (
    <div>
      <ul className={dropdown?'profile-menu-items clicked':'profile-menu-items'} onClick={()=>setDropdown(!dropdown)}>
        {profile.map(item=>{
            return (
                <li key={item.id}>
                    <a href={item.path} className={item.cName} onClick={()=>{setDropdown(false);if(item.id===4){localStorage.removeItem('token');localStorage.removeItem('UserId');}}}>{item.tittle}</a>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default Dropdown