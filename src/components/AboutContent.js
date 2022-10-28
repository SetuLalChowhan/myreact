import "../css/AboutContent.css"
import { Link } from "react-router-dom"
import ReactOne from '../assets/images/ReactOne.jpg'
import ReactTwo from '../assets/images/ReactTwo.jpg'

import React from 'react'

export default function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p> I am a react font-end developer.I create responsive secure website for my clients</p>
            <Link to={'/contact'}>
                <button className="btn">Contact </button> </Link>

        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack-top">

                    <img src={ReactOne} alt='ReactOne'/>
                </div>
                <div className="img-stack-bottom">

                    <img src={ReactTwo} alt='ReactTwo'/>
                </div>

            </div>


        </div>
    </div>
  )
}
