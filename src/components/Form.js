import "../css/Form.css"
import React, { useState } from 'react'

export default function Form() {
    const [input,setInput] =useState({
        name:"",
        email:"",
        Subject:"",
        Message:""
    })

    const handleChange =(e)=>{
        setInput((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }
  return (
    <div className="FORM-ALL">
        <h1> Contact  </h1>
        <form>
            <input name="name" type="text" value={input.name} placeholder="Enter your name" onChange={handleChange}/>
            
            <input name="email" type="email" value={input.email} placeholder ='Enter your Email'onChange={handleChange}/>
           
            <input name="Subject" value={input.Subject} placeholder ='Enter your Subject' onChange={handleChange} type="text"/>
           
            <textarea name="Message" rows="6" placeholder="type your message here" value={input.Message} onChange={handleChange}/>
            
            <button type="submit" className="btn">Submit</button>
        </form>

    </div>
  )
  
}
