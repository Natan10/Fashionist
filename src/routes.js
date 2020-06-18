import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import CartProducts from './components/CartProducts';


export default function Routes(){
  return(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Products}/>
        <Route path="/product/:code_color?" component={ProductDetail}/>
        <Route path="/cart" component={CartProducts}/>
      </Switch>
    </BrowserRouter>
  )
}