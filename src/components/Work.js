import "../css/WorkCard.css"
import WorkCard from "./WorkCard"
import WorkCardData from './WorkCardData'


import React from 'react'

export default function Work() {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">

            {
                WorkCardData.map((item,index)=>{
                    return(
                        <WorkCard
                        key={index}
                        imgSrc ={item.imgSrc}
                        title ={item.title}
                        text ={item.text}
                        view ={item.view}
                        />
                    )
                })
            }
            

        </div>

    </div>
  )
}
