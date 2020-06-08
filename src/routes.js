import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Products from './components/Products';
import productDetail from './components/ProductDetail';


export default function Routes(){
  return(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Products}/>
        <Route path="/product" component={productDetail}/>
      </Switch>
    </BrowserRouter>
  )
}