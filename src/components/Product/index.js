import React from 'react'

import './style.css'
import foto from '../../assets/Goku.jpg'



export default function Product(props){
  const {name,discount_percentage,image,actual_price} = props.data

  return(
    <div className="card_product">
      <div className="photo_product">
        {discount_percentage !== "" ? <span>{discount_percentage}</span>: ""}
        {image !== "" ? <img src={image} alt="teste"/>:<img src={foto} alt="teste"/> }
      </div>
      <div className="price_and_descount">
        <h2>{name}</h2>
        <span>{actual_price}</span>
      </div>
    </div>
  )

}