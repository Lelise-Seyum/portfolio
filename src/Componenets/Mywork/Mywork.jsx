import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork from '../../assets/mywork_data'
import arrow_icon from  '../../assets/arrow_icon.svg'
const Mywork = () => {
  return (
    <div className='mywork' id='work'>
      <div className='my-work-title'>
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="work-container">
        {mywork.map((work,index)=>{
            return(
              <div key={index} className='work-item'>
             <img  src={work.w_img} alt={work.w_name} />
            
             <a href={work.w_link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
            )
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Mywork
