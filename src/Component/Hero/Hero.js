import React from 'react'
import "./Hero.css"
import hero from "../Image/heros.png"
function Hero() {
  return <>
  <section id='home' className='hero-section-container'>
    <div className='hero-left'>  
      <div className='welcome'><span>Welcome</span></div>
    <div className='name'>This is <span>firstname</span> lastname</div>
    <div className='sentance'>a group of words containing a subject and a verb, that expresses a statement, a question, etc. When a sentence is written it begins with a big (capital) letter and ends with a full stop.</div>
    <div className='link'>
    <i class="fa fa-github"></i>
    <i class="fa fa-linkedin"></i>
    <button id='hire' className='hire'>Resume</button>
    </div>
    </div>
    <div className='hero-right'>
      <div className='sq'></div>
      <div className='sq1'></div>
        <img className='vert-move' src={hero} alt='heroimage'/>
    </div>

  </section>
  </>
}

export default Hero