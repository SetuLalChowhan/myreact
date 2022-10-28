import "../css/WorkCard.css"

import {NavLink} from "react-router-dom"

import React from 'react'

export default function WorkCard({imgSrc,title,text,view}) {
  return (
    <div className="project-card">
             <img src={imgSrc} alt="ProjectImg" />
             <h2 className="project-title">{title}</h2>
             <div className="pro-details">

                <p> {text}</p>
                <div className="pro-btns">
                    <NavLink to={view} className='btn'>View</NavLink>
                    <NavLink to={view} className='btn'>Source</NavLink>

                </div>
             </div>

            </div>
  )
}
