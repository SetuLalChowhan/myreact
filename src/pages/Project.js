import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Work from '../components/Work'

export default function Project() {
  return (
    <div>
     <Navbar/>
     <HeroImg2  heading="Projects" text="Some of my most recent works"/>
     <Work/>
     <Footer/>
    </div>
  )
}