import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import './style.css'

import {useSelector} from 'react-redux';

export default function Navbar(){

  const {cartProducts} = useSelector(state => state);
  

  return(
    <header>
      <div className="navbar">
       <div className="container">
        <ul>
          <li><h1>Fashionist</h1></li>
          <li>
            <FaShoppingBasket size={25}/>
            {cartProducts.length > 0 ? <span className="icon_qtd_cart">{cartProducts.length}</span>: ''}
          </li>
        </ul>
       </div>
      </div>
    </header>
  )

}