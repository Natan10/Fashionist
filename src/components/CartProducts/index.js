import React from 'react';
import { BsTrash } from 'react-icons/bs';

import './style.css';
import foto from '../../assets/Goku.jpg';

export default function CartProducts(){

  /**
    <div className="cart_products_info">
      <div className="cart_products_photo">
        <img src={foto} alt="teste"/>
      </div>
      <div className="cart_products_price_qtd">
        <span>Nome produto</span>
        <span>Tamanho</span>
        <ul>
          <li> - </li>
          <li> 2 </li>
          <li> + </li>
        </ul>
      </div>
      <div className="cart_products_value">
        <span> R$ 256,00 </span>
        <span> x3 R$ 52,00 </span>
      </div>
    </div>
  */
  return (
    <div className="cart_products">
      <table className="cart_products_table">
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={foto} alt="teste"/></td>
            <td>
              <h2>Roupa do Goku</h2>
              <span>Tam: 40</span></td>
            <td>
              <ul>
                <li className="button_list"> - </li>
                <li className="qtd_list"> 2 </li>
                <li className="button_list"> + </li>
              </ul>
            </td>
            <td>R$ 42,00</td>
            <td><BsTrash className="icon" size={20}/></td>
          </tr>

          <tr>
            <td><img src={foto} alt="teste"/></td>
            <td>
              <h2>Roupa do Goku</h2>
              <span>Tam: 40</span></td>
            <td>
              <ul>
                <li className="button_list"> - </li>
                <li className="qtd_list"> 2 </li>
                <li className="button_list"> + </li>
              </ul>
            </td>
            <td>R$ 42,00</td>
            <td><BsTrash className="icon" size={20}/></td>
          </tr>
        </tbody>
      </table>
      <div className="footer">
        <span>Subtotal: R$ 523,00</span>
      </div>
    </div>
  )
}