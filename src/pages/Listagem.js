import React, { Component } from 'react'
import { Player, ControlBar } from 'video-react';
import io from 'socket.io-client'
import api from '../services/api'

import './Listagem.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'



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
        const socket = io('http://localhost:3030')

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
    }

    handleCurtida = id => {
        api.post(`/videos/${id}/curtida`)
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

                        <img src={more} alt='Mais' />

                    </header>
                        
                    <Player src={`http://localhost:3030/files/${film.video}`}>
                            <ControlBar autoHide={false} className="my-class" />
                    </Player>

                    <footer>
                        <div className='acoes'>
                            <button type='button' onClick={() => this.handleCurtida(film._id)}>
                                <img src={like} alt='Curtidas' />
                            </button>
                        </div>

                        <strong>{film.curtidas} curtidas</strong>
                            <p>
                                {film.descricao}
                                <span>{film.hashtags}</span>
                            </p>
                    </footer>
                </article>
                ))}
                
            </section> 
        )
    }
}

export default Listagem