import React from 'react'
import './Hero.css'
import d_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, odio perferendis nisi maxime magni nemo pariatur rerum, doloribus suscipit quidem omnis enim temporibus sed voluptates nobis tenetur nesciunt, commodi reiciendis!</p>
        <button className='btn'>Explore more <img src={d_arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero
