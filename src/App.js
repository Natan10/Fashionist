import React, {useState,useEffect} from 'react';

import Navbar from './components/Navbar';
import Products from './components/Products'

import './global.css'
import api from './utils/api';

function App() {
  const [dados,setDados] = useState([]);

  useEffect(()=>{
    api().then(value => setDados(value));
  },[])

  return (
    <div>
      <Navbar/>
      <Products data={dados}/>
   </div>
  );
}

export default App;
