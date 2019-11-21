import React, { Component } from 'react'

import api from '../services/api'
import './Upload.css'

class Upload extends Component{
    state = {
        video: null,
        titulo: '',
        descricao: '',
        hashtags: '',
    }

    handleSubmit = async e => {
        e.preventDefault()

        const data = new FormData()

        data.append('video', this.state.video)
        data.append('titulo', this.state.titulo)
        data.append('descricao', this.state.descricao)
        data.append('hashtags', this.state.hashtags)

        await api.post('videos', data)

        this.props.history.push('/')
    }

    handleVideoChange = e => {
        this.setState({ video: e.target.files[0] })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){

        return(
            <form id='novo-video' onSubmit={this.handleSubmit}>
                
                <input type='file' accept="video/mp4" onChange={this.handleVideoChange} />

                <input 
                    type='text'
                    name = 'titulo'
                    placeholder='Título do filme'
                    onChange={this.handleChange}
                    value={this.state.titulo}
                />

                <input 
                    type='text'
                    name = 'descricao'
                    placeholder='Descrição do filme'
                    onChange={this.handleChange}
                    value={this.state.descricao}
                />

                <input 
                    type='text'
                    name = 'hashtags'
                    placeholder='Hashtags do filme'
                    onChange={this.handleChange}
                    value={this.state.hashtags}
                />

                <button type='submit'>Enviar</button>
            </form>
        )
    }
}

export default Upload