import React from 'react'
import { Link } from 'react-router-dom';

import './style.css'
import foto from '../../assets/Goku.jpg'



export default function Product(props){

  const {id,title,price, image} = props.data
  


  return(

    <div className="card_product"> 
      <Link to={`/product/${id}`}>
        <div className="photo_product" >
          {image !== "" ? <img src={image} alt="teste"/>:<img src={foto} alt="teste"/> }
        </div>
      </Link>
      <div className="price_and_descount">
        <h2>{title}</h2>
        <span>R$ {price}</span>
      </div>
      
    </div>
  )

}