import React from 'react'
import {Link} from 'react-router-dom';
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
          <li>
              <Link to="/">
                <h1>Fashionist</h1>
              </Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingBasket size={25}/>
              {cartProducts.length > 0 ? <span className="icon_qtd_cart">{cartProducts.length}</span>: ''}
            </Link>
          </li>
        </ul>
       </div>
      </div>
    </header>
  )

}