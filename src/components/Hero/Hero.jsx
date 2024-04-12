import React from 'react'
import './Hero.css'
import arrowImg from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>On Target</h1>
            <p>Shake Up Your Sales Results.</p>
            <button className='btn'>Explore More <img src={arrowImg} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero;