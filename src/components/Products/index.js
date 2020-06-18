import React,{useEffect} from 'react';

import Product from '../Product';
import './style.css';

import {useSelector, useDispatch} from 'react-redux';

import api from '../../utils/api';
import {addProducts} from '../../actions';

export default function Products(){

  //Estado da aplicação no Redux
  //const [data,setDados] = useState([]);

  const store = useSelector(state => state);
  const dispatch  = useDispatch();


  useEffect(()=>{
    api().then(value => dispatch(addProducts(value)));
  },[dispatch])


  return(
    <div className="container_products">
      {store.products.map(product => <Product key={product.code_color} 
                                    data={product} 
                                    />)}
    </div>
  )

}