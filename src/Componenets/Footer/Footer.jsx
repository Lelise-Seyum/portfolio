import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import photo from '../../assets/1.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={photo} alt=""  width={100}/>
            <p>I am frontend developer from,Ethiopia with 1 year of experiance</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter you email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>

      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left"> 2025 Lelise Seyum.All right reserved</p>
        <div className="footer-bottom-right">
            <p>Term of Service</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
