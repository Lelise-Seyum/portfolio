import React from 'react'
import './Hero.css'
import profile from '../../assets/l-modified.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile} alt="" />
      <h1> <span> I'm lelise Seyum,</span>Frontend developer based in Ethiopia</h1>
      <p>I am an experianced Frontend Developer with 1 year of profesional experties in the field 
        Throught my career,i have had the preivillage of collaborating with prestigious organization,collaborating,contributing to their success and growth.
        My passion for frontend ddvelopment is not only reflected in my extensive experiance but also in the enthusiasm and dedication i bring to each point.
      </p>
      <div className="hero-action">
       <div className="hero-comment"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
       



      </div>
    </div>
  )
}

export default Hero
