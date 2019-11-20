import React, { Component } from 'react'
import { Player, ControlBar } from 'video-react';
import io from 'socket.io-client'
import api from '../services/api'

import './Listagem.css'

import like from '../assets/like.svg'
import deslike from '../assets/deslike.svg'


class Listagem extends Component{

    state = {
        listaVideos: [],
    }

    async componentDidMount() {
        this.registerToSocket()

        const response = await api.get('videos')

        this.setState({ listaVideos: response.data})
    }
    
    registerToSocket = () => {
        const socket = io(process.env.REACT_APP_API_URL)

        socket.on('video', novoVideo => {
            this.setState({ listaVideos: [novoVideo, ...this.state.listaVideos]})
        })

        socket.on('curtida', novaCurtida => {
            this.setState({ 
                listaVideos: this.state.listaVideos.map(film =>
                    film._id === novaCurtida._id ? novaCurtida : film
                )
            })
        })

        socket.on('descurtida', novaDescurtida => {
            this.setState({ 
                listaVideos: this.state.listaVideos.map(film =>
                    film._id === novaDescurtida._id ? novaDescurtida : film
                )
            })
        })
    }

    handleCurtida = id => {
        api.post(`/videos/${id}/curtida`)
    }
    handleDescurtida = id => {
        api.post(`/videos/${id}/descurtida`)
    }

    render(){

        return(
            <section id='lista-video'>
                { this.state.listaVideos.map(film => (
                    <article key={film.id}>
                    <header>
                        <div className='video-info'>
                            <strong>
                                <span>
                                    {film.titulo}
                                </span>
                            </strong>
                        </div>

                    </header>
                    
                    <video width="320" height="240" controls>
                         <source src="https://wwww.gustavomota.com.br/video/4.mp4" type="video/mp4" />
           
                        </video>
                    

                    <footer>
                        
                            <p>
                                {film.descricao}
                                <span>{film.hashtags}</span>
                            </p>
                            <br/>
                        <div className='acoes'>
                            <button type='button' onClick={() => this.handleCurtida(film._id)}>
                                <img src={like} alt='Curtidas' />
                            </button>
                            <button type='button' onClick={() => this.handleDescurtida(film._id)}>
                                <img src={deslike} alt='Descurtidas' />
                            </button>
                        </div>
                        
                        <strong>
                            {film.curtidas} gostei 
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {film.descurtidas} não gostei
                        </strong>
                            
                    </footer>
                </article>
                ))}
                
            </section> 
        )
    }
}

export default Listagem