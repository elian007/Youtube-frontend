import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import upload from '../assets/upload.svg'
import './Header.css'


export default class Header extends Component{


    render(){


        return(

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <header>
                <Link to='/'>
                    <img src={logo} className='img1'alt='Videos' />
                </Link>
          
                
                    
                    

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <Link to='/upload'>
                    <span><img src={upload} className='img2' alt='Uplaod de vídeos'/></span>
                </Link>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </header>
            </nav>
        )
    }


}