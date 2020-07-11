import React,{useState,useEffect} from 'react';

import Product from '../Product';
import './style.css';

import {useSelector, useDispatch} from 'react-redux';
import Loader from '../Loader';

import {api,stock_product} from '../../utils/api';
import {addProducts,addStock} from '../../actions';

export default function Products(){

  //Estado da aplicação no Redux
  const [loader,setLoader] = useState(true);

  const store = useSelector(state => state);
  const dispatch  = useDispatch();


  useEffect(()=>{
    api().then(value => dispatch(addProducts(value)));
    stock_product().then(value => dispatch(addStock(value)));
    setLoader(false)
  },[dispatch])


  return(
    <>
    {
    loader ? <Loader/> :
    <>
      <div className="total_itens">
        <span>{store.products.length} itens</span>
      </div>
      <div className="container_products">
        {store.products.map(product => <Product 
                                        key={product.id} 
                                        data={product} 
                                        />)}
      </div>
    </>
    }
    </>
  )

}