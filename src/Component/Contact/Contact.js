import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Contact.css"
function Contact() {
  return <>
  <section id='contact' className='contact-container'>
    <div className='contact-tittle'>Contact Me</div>
    <div className='white-container'>
      <div className='sub-add-container'>
        <div className='logo-add'>
     
          <div className='logo-name'>   <span><FontAwesomeIcon className='ic' icon="fa-solid fa-envelope" /></span> Email</div>
        </div>
        
<a className='type' href="mailto:firstnamelastname369@gmail.com" >firstnamelastname369@gmail.com</a>
      </div>
  
      <div className='sub-add-container'>
        <div className='logo-add'>
          <div className='logo-name'><span><FontAwesomeIcon className='ic' icon="fa-solid fa-phone" /> </span>Phone</div>
        </div>
        
<div className='type'>9000000000</div>
      </div>
          <div className='sub-add-container'>
        <div className='logo-add'>
          <div className='logo-name'><span><FontAwesomeIcon className='ic' icon="fa-solid fa-location-dot" /></span> Current Location</div>
        </div>
<div className='type'>Bangalore</div>
      </div>
    </div>
  </section>
  </>
}

export default Contact