import React from 'react'
import { Link } from 'react-router-dom';

import './style.css'
import foto from '../../assets/Goku.jpg'



export default function Product(props){
  const {name,discount_percentage,image,actual_price,code_color} = props.data
 

  return(

    <div className="card_product"> 
    <Link to={`/product/${code_color}`}>
        <div className="photo_product" >
          {discount_percentage !== "" ? <span>{discount_percentage}</span>: ""}
          {image !== "" ? <img src={image} alt="teste"/>:<img src={foto} alt="teste"/> }
        </div>
        <div className="price_and_descount">
          <h2>{name}</h2>
          <span>{actual_price}</span>
        </div>
      </Link>
    </div>
  )

}