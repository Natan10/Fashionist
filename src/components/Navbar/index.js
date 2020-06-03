import React from 'react'
import { FaUserAlt,FaShoppingBasket } from "react-icons/fa";
import './style.css'

export default function Navbar(){
  return(
    <header>
      <div className="navbar">
       <div className="container">
        <ul>
          <li><h1>Fashionist</h1></li>
          <li>
            <FaUserAlt size={20}/>
            <FaShoppingBasket size={20}/>
          </li>
        </ul>
       </div>
      </div>
    </header>
  )

}