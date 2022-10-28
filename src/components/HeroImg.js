import React from 'react'
import HeroIMG from '../assets/images/HomeImg.jpg'
import {Link} from 'react-router-dom'
import '../css/HeroImg.css'

export default function HeroImg() {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={HeroIMG} alt="HeroIMG"/>
        </div>
        <div className='content'>
            <p>Hi I'M SETU </p>
            <h1>React Developer</h1>
            <a exact href={'https://drive.google.com/file/d/1ayel8lCJAjlz6KA_MEHkMu6BvUJ4ymgN/view?usp=share_link'} className="btn" >Projects</a>
            <Link to={'/contact'} className="btn btn-light" >Contact</Link>
        </div>


    </div>
  )
}
