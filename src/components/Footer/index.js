import React from 'react';
import {FiInstagram,FiFacebook,FiGithub} from 'react-icons/fi';

import './style.css';


export default function Footer(){
  return(
    <div class="footer">
      <div class="footer__container">
        <h2>Fashionist</h2>
        <span>Siga-nos nas redes sociais</span>
        <div class="footer__itens">
          <a href="https://www.instagram.com/lemos_natan1/" target="_blank">
            <FiInstagram size={25}/>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FiFacebook size={25}/>
          </a>        
          <a href="https://github.com/Natan10" target="_blank">
            <FiGithub size={25}/>
          </a>      
        </div>
      </div>
    </div>  
  )
}