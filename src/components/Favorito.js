import React from 'react'
import './Favorito.css'
import star_true from './../assets/star_true.svg'
import star_false from './../assets/star_false.svg'

export default function Favorito (favorito) {
    console.log(favorito)
    return(
       
            <div>
                <button type='button' onClick={() => this.handleChange()}>
                    <img src= {favorito ? star_true : star_false} alt='Adc playlist' />
                </button>
            </div>
        )
}