import React, { Component } from 'react'
import './Favorito.css'
import star_true from './../assets/star_true.svg'
import star_false from './../assets/star_false.svg'

export default class Favorito extends Component{
    constructor(props) {
        super(props);
        this.state = {favorito: false}
      }
    
      handleChange() {
          if(this.state.favorito === false){
                this.setState({favorito: true});
          }
          else{
            this.setState({favorito: false})
          }
      }

    render(){
        return(
            <div>
                <button type='button' onClick={() => this.handleChange()}>
                    <img src= {this.state.favorito ? star_true : star_false} alt='Adc playlist' />
                </button>
            </div>
        )
    }
}