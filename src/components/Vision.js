import React from 'react'
import './Vision.css'
import micro from '../assets/logo1.png'
import azure from '../assets/azure.png'
import git from '../assets/github.png'
import figma from '../assets/figma.png'

const Vision = () => {
    const array1 =[{"img":azure, "title":"Cloud With Azure", "info":"As one of the most important rising technologies of microsoft we will be holding sessions on the Azure cloud network, lets get Azure certified together!"},
    {"img":git, "title":"Opensource with Github", "info":"Welcome to the world of opensource! Let's get ourselves prepared for GSOC MLH and Hacktober fest! Its never too late to be open"},
    {"img":figma, "title":"Microsoft Design Templates in Figma", "info":"Did you think Microsoft was all tech? No! We care about design too! Lets make our solutions user friendly and highly accessible"},
    {"img":micro, "title":"Exposure to the Microsoft World", "info":"Meet industry leaders and experts and lets have sessions and events conducted by MLSAs all over the globe! We have founders Hub, Imagine cup and much more!"}]


  return (
    <div className='vision'>
      <span className='vision-header'>MLSC NIT AP</span>
      <div className='vision-line'>
        <ul>
          <li>Build The Future</li>
          <li>Grow and Help your Community</li>
          <li>Be on Cloud Nine</li>
        </ul>
      </div>
        <div className='vision-ambassador'>
        <div className='vision-statement'>Join Us And Become An MLSA</div>
        <div className='vision-info'>Achieve more with unique opportunities to build AI-driven solutions, explore cutting-edge technology, lead local communities, and grow online presence.<br/>Develop professional skills that align with your interests and aspirations.<br/>Share ideas, solve challenges, and expand your circle of influence.</div>
      </div>
      <div className='vision-cards'>
        {array1.map((item,index)=>(
          <div key={index} className='vision-card'>
            <img src={item.img} alt={item.img}/>
            <h1>{item.title}</h1>
            <p>{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vision
