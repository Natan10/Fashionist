import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import './style.css';
import foto from '../../assets/Goku.jpg';

export default function ProductDetail(){

  const [sizeSelect,selectSize] = useState('');
  const [sizeError,setSizeError] = useState(false);

  const { code_color } = useParams();
  const  store  = useSelector(state => state);
  const product = store.products.filter(prod => prod.code_color === code_color);

  const handleClickSize = (size) =>{
    if (size === sizeSelect) {
      selectSize('');
      setSizeError(true);
    } else {
      selectSize(size);
      setSizeError(false);
    }
  }

  const addProduct = () => {
    if(sizeSelect === ''){
      setSizeError(true);
    }else{
      alert('deu bom')
    }
  }

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
          {!sizeError ? '': <span>escolha o tamanho</span>}
          <div className="size">
            {product[0].sizes.map((item,key) => 
              <button className={sizeSelect === item.size ? `button_size select`: `button_size`} 
                      key={key} 
                      disabled={!item.available} 
                      onClick={()=> handleClickSize(item.size)}>{item.size}</button>)}
          </div>
    
          <button className="button_add_cart" onClick={()=> addProduct()}>Adicionar à Sacola</button>
        </div>     
      </div>
    </div>
  )

}