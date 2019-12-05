import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import upload from '../assets/upload.svg'
import './Header.css'
//import api from '../services/api'


export default class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit = async e => {
        e.preventDefault()
        
        //api.get(`/pesquisa/${this.state.value}`)
        window.location.href = `/videos/${this.state.value}`
    }
    

    render(){
        
        return(
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                

                <header>
                    <Link to='/'>
                        <img src={logo} className='img1'alt='Videos' />
                    </Link>
          
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link to='/upload'>
                            <span><img src={upload} className='img2' alt='Uplaod de vídeos'/></span>
                        </Link>
                        <Link to='/playlist'>
                            <span id='play'>Playlist</span>
                        </Link>
                        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                            <input className="form-control mr-sm-2" type="search" 
                                placeholder="Search" aria-label="Search" value={this.state.value}
                                onChange={this.handleChange} id= 'pesquisa' name='pesquisa'/>
                    
                        <button className="btn btn-outline-success my-2 my-sm-0" 
                                 type="submit">
                                        Search
                        </button>
                        
                </form>
                       
                    </div>
                </header>
             
            </nav>
          
        )
    }
}