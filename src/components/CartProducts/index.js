import React from 'react';
import { BsTrash } from 'react-icons/bs';

import {useSelector,useDispatch} from 'react-redux';
import {decreaseAmountProduct,addProductCart} from '../../actions';

import {formatPrice,totalValue} from '../../utils/formatInfo';

import './style.css';
import foto from '../../assets/Goku.jpg';

export default function CartProducts(){

  const {cartProducts} = useSelector(state => state);
  const dispatch = useDispatch();

  const decreaseAmount = (product) => {
    if(product.amount > 1){
      dispatch(decreaseAmountProduct(product))
    }else{
      alert('Ação não permitida...')
    }
  }

  const increaseAmount = (product) => {
    dispatch(addProductCart(product))
  }


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
          
          {cartProducts.map((item,key) =>(
            // eslint-disable-next-line no-unused-expressions
            <tr key={key}>
              <td>{item.image ? <img src={item.image} alt='Goku'/>:<img src={foto} alt='Goku'/>}</td>
              <td>
                <h2>{item.name}</h2>
                <span>Tam: {item.sizeSelect}</span></td>
              <td>
                  <button className="button_list" onClick={()=> decreaseAmount(item)}> - </button>
                  <span className="qtd_list">{item.amount}</span>
                  <button className="button_list" onClick={()=> increaseAmount(item)}> + </button>
              </td>
              <td>{formatPrice(item.amount,item.actual_price)}</td>
              <td><BsTrash className="icon" size={20}/></td>
            </tr>
           ))}
          
        </tbody>
      </table>
      <div className="footer__cart">
        <span>Subtotal: R$ {totalValue(cartProducts)}</span>
      </div>
    </div>
  )
}