import React from 'react'
import './About.css'
import theme from '../../assets/theme_pattern.svg'
import profile from '../../assets/l.jpg'
const About = () => {
  return (
    <div className='about'id='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={theme} alt="" />
      </div>
      <div className='about-section'>
         <div className="about-left">
            <img src={profile} alt="" width={450} height={450}/>
         </div>
         <div className="about-right">
            <div className="about-para">
                <p>I am an experianced Frontend Developer with 1 year of proffesional experties in the field 
                   Throught my career,i have had the preivillage of collaborating with prestigious organization,collaborating,contributing to their success and growth.
                </p>
            <p>My passion for frontend dvelopment is not only reflected in my extensive experiance but also in the enthusiasm and dedication i bring to each point.</p>
            </div>
            <div className="about-skills">
            
                  <div className='about-skill'><p>HTML&CSS</p> <hr style={{width:'80%'}} /></div>  
                     <div className='about-skill'> <p>ReactJs</p> <hr style={{width:'70%'}} /></div>
                        <div className='about-skill'><p>javaScript</p> <hr style={{width:'60%'}} /></div>
                          <div className='about-skill'><p>NodeJs</p> <hr style={{width:'57'}} /></div>
                    
                     
            </div>
            </div>
         </div>
         <div className="about-achievments">
            <div className="about-achivment">
                <h1>1+</h1>
                <p>Years of experiance</p>
            </div>
            <hr />
            <div className="about-achivment">
                <h1>10+</h1>
                <p>Project completed</p>
            </div>
            <hr />
            <div className="about-achivment">
                <h1>2+</h1>
                <p>Happy client</p>
            </div>


           </div>
         </div>

  )
}

export default About
