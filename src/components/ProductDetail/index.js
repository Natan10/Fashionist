import React, {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';

import './style.css';
import foto from '../../assets/Goku.jpg';
import {addProductCart} from '../../actions';

export default function ProductDetail({ product }){
  const dispatch = useDispatch();

  const [sizeSelect,selectSize] = useState('');
  const [sizeError,setSizeError] = useState(false);


  const handleClickSize = (size) =>{
    if (size === sizeSelect) {
      selectSize('');
      setSizeError(true);
    } else {
      selectSize(size);
      setSizeError(false);
    }
  }






 const addProd = (e) => {
   e.preventDefault();

   if(sizeSelect !== ''){
    const { sizes,...rest } = product
    dispatch(addProductCart({
      ...rest,
      sizeSelect: sizeSelect,
    }));
  }else{
    setSizeError(true);
   }
 }


  return(
    <div className="card_product_detail">
      <div className="photo_product_detail">  
        {product.image ? <img src={product.image} alt='Goku'/>:<img src={foto} alt='Goku'/>}
      </div>
      <div className="product_info_detail">
        <h2>{product.name}</h2>
        <div className="product_price_detail">
          <span>{product.actual_price}</span> 
          <span>em {product.installments}</span> 
        </div>
        
        <div className="product_length_detail">
          { !sizeError ? '':<span>escolha o tamanho</span>}
          <div className="size">
              {product.sizes && product.sizes.map((item,key) => 
              <button className={sizeSelect === item.size ? `button_size select`: `button_size`} 
                      key={key} 
                      disabled={!item.available} 
                      onClick={()=>handleClickSize(item.size)}
                       >{item.size}</button>)}
          
          </div>
    
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