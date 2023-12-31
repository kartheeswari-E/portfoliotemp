import React, { useState } from 'react'
import "./Project.css"
import project from "../Image/project.png"
function Project() {
    const[state,setstate]=useState(false)
  return <>
  <section id='project' className='project-container'>
    <div className='project-title'>My Projects</div>
    <div className='sub-pro-container'>Credentials
        <div className='credential-container'>
            <div className='sub-cren'>
                <div className='type-name'>User</div>
                <div className='auth'>User Id :</div>
                <div className='auth'>Password:</div>
            </div>
            <div className='sub-cren'>
            <div className='type-name'>Admin</div>
            <div className='auth'>User Id :</div>
                <div className='auth'>Password:</div>
            </div>
            <div className='sub-cren'>
            <div className='type-name'>Payment Gateway</div>
            <div className='auth'>User Id :</div>
                <div className='auth'>Password:</div>
            </div>
        </div>
        <div className='pro-container'>
            <div className='cover'>
                <img src={project} alt='...'/>
                <div className='desc'>Created like a Ecommerce Website and having a Features like Solving the Customer Queries and they have a option to choose the Experts by own .Concepts which i is Used Authentication, Payment Gateway(Razorpay), Fetch, Nodemailer.</div>
            <div className='whole-button'>
                <button className='hire'>Live</button>
                <button className='hire'>Frontend</button>
                <button className='hire'>Backend</button>
            </div>
            </div>
            <div className='cover'>
                <img src={project} alt='...'/>
                <div className='desc'>Created like a Ecommerce Website and having a Features like Solving the Customer Queries and they have a option to choose the Experts by own .Concepts which i is Used Authentication, Payment Gateway(Razorpay), Fetch, Nodemailer.</div>
            <div className='whole-button'>
                <button className='hire'>Live</button>
                <button className='hire'>Frontend</button>
                <button className='hire'>Backend</button>
            </div>
            </div>
            <div className='cover'>
                <img src={project} alt='...'/>
                <div className='desc'>Created like a Ecommerce Website and having a Features like Solving the Customer Queries and they have a option to choose the Experts by own .Concepts which i is Used Authentication, Payment Gateway(Razorpay), Fetch, Nodemailer.</div>
            <div className='whole-button'>
                <button className='hire'>Live</button>
                <button className='hire'>Frontend</button>
                <button className='hire'>Backend</button>
            </div>
            </div>
           { state?<div className='cover'>
                <img src={project} alt='...'/>
                <div className='desc'>Created like a Ecommerce Website and having a Features like Solving the Customer Queries and they have a option to choose the Experts by own .Concepts which i is Used Authentication, Payment Gateway(Razorpay), Fetch, Nodemailer.</div>
            <div className='whole-button'>
                <button className='hire'>Live</button>
                <button className='hire'>Frontend</button>
                <button className='hire'>Backend</button>
            </div>
            </div>:""}
        </div>
        <button onClick={()=>setstate(!state)} className='hires'>{!state?"More":"Less"}</button>
    </div>
  </section>
  </>
}

export default Project