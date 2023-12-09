import React from 'react'
import "./Navbar.css"
function Navbar() {
  return <>
  <section className='navbar-container'>
    <div className='navbar-left'>
      <div className='hero-name-logo'><span>L</span>ogo</div>
    </div>
    <div className='navbar-right'>
      <div className='list-of-list'>
        <a href='#home' className='home'>Home</a>
        <a href='#about' className='about'>About</a>
        <a href='#skill'className='skill'>Skill</a>
        <a href='#project' className='project'>Project</a>
        <a href='#contact' className='contact'>Contact</a>
      </div>
    </div>
  </section>

  </>
}

export default Navbar