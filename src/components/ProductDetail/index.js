import React from 'react';
import {useDispatch} from 'react-redux';

import './style.css';
import foto from '../../assets/Goku.jpg';
import {addProductCart} from '../../actions';

export default function ProductDetail(props){
  const dispatch = useDispatch();

  
  const addProd = (e) => {
    e.preventDefault();
    dispatch(addProductCart(props.product));
  }

  return(
    
    <div className="card_product_detail">
      
      <div className="photo_product_detail">  
        {props.product.image ? <img src={props.product.image} alt='Goku'/>:<img src={foto} alt='Goku'/>}
      </div>
      <div className="product_info_detail">
        <h2>{props.product.title}</h2>
        <div className="product_price_detail">
          <h3>Quantidade {props.stock.amount}</h3> 
          <span>R$ {props.product.price}</span> 
        </div>
        
        <div className="product_length_detail">
          <button className="button_add_cart" onClick={addProd}>Adicionar à Sacola</button>
        </div>     
      </div>
    </div>
  )

}

/*
{product[0].sizes.map((item,key) => 
  <button className={sizeSelect === item.size ? `button_size select`: `button_size`} 
          key={key} 
          disabled={!item.available} 
          onClick={()=> handleClickSize(item.size)}>{item.size}</button>)}
          */