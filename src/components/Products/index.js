import React,{useState,useEffect} from 'react';

import Product from '../Product';
import './style.css';

import api from '../../utils/api';

export default function Products(){

  const [data,setDados] = useState([]);

  useEffect(()=>{
    api().then(value => setDados(value));
  },[])


  return(
    <div className="container_products">
      {data.map(product => <Product key={product.style} data={product}/>)}
    </div>
  )

}