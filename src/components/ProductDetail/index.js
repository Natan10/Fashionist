import React from 'react';

import './style.css';
import foto from '../../assets/Goku.jpg';

export default function productDetail(){
  return(
    <div className="card_product_detail">
      <div className="photo_product_detail">
        <span>12%</span>
        <img src={foto} alt="teste"/>
      </div>
      <div className="product_info_detail">
        <h2>Teste goku</h2>
        <div className="product_price_detail">
          <span>R$ 523,00</span> 
          <span>em 5x de xxx</span> 
        </div>
        
        <div className="product_length_detail">
          <span>escolha o tamanho</span>
          <ul>
            <li>P</li>
            <li>M</li>
            <li>G</li>
          </ul>

          <button>Adicionar à Sacola</button>
        </div>     
      </div>
    </div>
  )

}