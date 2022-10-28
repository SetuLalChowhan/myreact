import React from 'react'
import Home from './Home'
import Project from './Project'
import Contact from './Contact'
import About from './About'
import { Routes,Route} from 'react-router-dom'

export default function pages() {
  return (
    <>
    <Routes>
        <Route exact  path='/' element={<Home/>}/>
        <Route exact  path='/project' element={<Project/>}/>
        <Route exact  path='/contact' element={<Contact/>}/>
        <Route exact  path='/about' element={<About/>}/>
        
       
    </Routes>
    </>
  )
}
