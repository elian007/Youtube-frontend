import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css'

import logo from '../assets/logo.svg'
import upload from '../assets/upload.svg'




export default function Header() {
 
  return (
    <header id='main-header'>
        <div className='header-content'>
            <Link to='/'>
                <img src={logo} className='img1'alt='Videos' />
            </Link>

            <input name='pesquisar'type='text' class='form-control' placeholder='Pesquisar vídeo...' />
              <Link to='/pesquisa'>
                <button type='submit' class='btn-btn-primary'>Enviar</button>
              </Link>
          
            <Link to='/upload'>
              <span><img src={upload} className='img2' alt='Uplaod de vídeos'/></span>
            </Link>
        </div>
    </header>
  );
}
