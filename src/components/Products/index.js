import React from 'react';

import Product from '../Product';
import './style.css';


export default function Products(props){
  
  return(
    <div className="container_products">
      {props.data.map(product => <Product key={product.style} data={product}/>)}
    </div>
  )
}