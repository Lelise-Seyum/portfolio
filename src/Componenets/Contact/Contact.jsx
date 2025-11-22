import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "99daf5d1-2066-4e53-8473-b597052f8085");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p> I'm currently available to take on new project,so feel free to talk about anything that you want to work on.You can contact anytime</p>
            <div className="contact-details">
                <div className="contact-detail">
                   <img src={icon} alt="" /><p>leliseseyumfirew@gmail.com</p>
                </div>

                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+2519-343-02812</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon}alt="" /> <p>Addis Ababa,Ethiopia</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor=''>Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
             <label htmlFor=''>Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
             <label htmlFor=''>Write Your message here</label>
            <textarea name="message" id="" rows={8} placeholder='Enter your message'></textarea>            
            <button type='submit' className="contact-submit">Submit now</button>

        </form>
      </div>
    </div>
  )
}

export default Contact
