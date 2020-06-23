import React,{useState,useEffect} from 'react';

import ProductDetail from '../ProductDetail';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

export default function SingleProduct(){

  const [product,setProduct] = useState(''); 
  const {code_color} = useParams();
  const { products } = useSelector(state => state);

  useEffect(() => {
    setProduct(products.find(prod => prod.code_color === code_color))
  }, [code_color, products])


  return(
    <>
      <ProductDetail product={product}/>
    </>
  )
}