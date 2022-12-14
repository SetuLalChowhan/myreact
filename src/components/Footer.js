import '../css/footer.css'

import React from 'react'
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
             <div className='location'>
             <FaHome size={20} style={{color:'#fff',marginRight:"2rem"}}/>
            
             <div>
                <p>Housing Society</p>
                <p>Bangladesh</p>
             </div>
             </div>
             <div className='phone'>
            <h4><FaPhone size={20} style={{color:'#fff',marginRight:"2rem"}}/>
            01703235334
            </h4>
            </div>
             <div className='email'>
            <h4><FaMailBulk size={20} style={{color:'#fff',
        marginRight:"2rem"}}/>
            abc@emaiil.com
            </h4>
            </div>
            </div>
            
            <div className='right'>
                <h4>About the Company</h4>
                <p>loasklodhklasjdjasjkahdahsjkdalsdklakld
                    lasdlasdkashdhasgdkakdhkashdkasd
                </p>
                <div className='social'>
                <FaFacebook size={30} style={{color:'#fff',marginRight:"2rem"}}/>
                <FaTwitter size={30} style={{color:'#fff',marginRight:"2rem"}}/>
                <FaLinkedin size={30} style={{color:'#fff',marginRight:"2rem"}}/>
                </div>

            </div>

        </div>
    </div>
  )
}
