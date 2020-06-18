import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import './style.css';
import foto from '../../assets/Goku.jpg';

export default function ProductDetail(){

  const { code_color } = useParams();
  const  store  = useSelector(state => state);
  console.log(store.products)
  const product = store.products.filter(prod => prod.code_color === code_color);
  console.log(product)

  return(
    <div className="card_product_detail">
      <div className="photo_product_detail">
        {product[0].discount_percentage !== ''? <span>{product[0].discount_percentage}</span>:''}
        {product[0].image !== '' ? <img src={product[0].image} alt={product[0].name}/>:<img src={foto} alt='Goku'/>}
      </div>
      <div className="product_info_detail">
        <h2>{product[0].name}</h2>
        <div className="product_price_detail">
          <span>{product[0].actual_price}</span> 
          <span>em {product[0].installments}</span> 
        </div>
        
        <div className="product_length_detail">
          <span>escolha o tamanho</span>
          <ul>
            {product[0].sizes
                       .filter(size => size.available === true)
                       .map(size => 
                       <li className="is_active">{size.size}</li>
                       )}
    
          </ul>

          <button>Adicionar à Sacola</button>
        </div>     
      </div>
    </div>
  )

}