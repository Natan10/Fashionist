import React,{useState,useEffect} from 'react';

import ProductDetail from '../ProductDetail';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

export default function SingleProduct(){

  const [product,setProduct] = useState(''); 
  const [stock_product,setProductStock] = useState(''); 
  const { id } = useParams();
  const { products,stock } = useSelector(state => state);

  useEffect(() => {
    const product_store = products.find(p => p.id === parseInt(id))
    const stock_store = stock.find(p => p.id === parseInt(id))
    setProduct(product_store)
    setProductStock(stock_store)
  }, [id, products,stock])

  
  return(
    <>
      <ProductDetail product={product} stock={stock_product}/>
    </>
  )
}