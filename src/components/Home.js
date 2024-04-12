import React from 'react'
import './Home.css'
import mlsa from '../assets/MLSA.png'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-content'>
        <div className='home-text'>
        <span className='mlsc-text'><h1>Microsoft Learn Student Club</h1></span>
        <span className='mlsc-about-text'><h3>Accelerate innovation and grow the skills you need to have greater impact in the projects and communities that matter to you.</h3></span>
        <a className='application'href="https://forms.office.com/r/hTET2nU5QB" target="_blank">Join The Club</a>
        </div>
        <div className='home-image'>
        <img src={mlsa} alt="microsoft learn student ambassador logo"/>
        </div>
      </div>
    </div>
  )
}

export default Home
