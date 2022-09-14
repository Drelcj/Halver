import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {TbBrandMessenger} from 'react-icons/tb'
{/*import { useRef } from 'react';
import emailjs from 'emailjs-com ' */}

export const Contact = () => {
 {/* const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
  }; */}

  return (
    <section id='contact'>{/*contact*/}
      <h5>Get In touch</h5>
      <h2>with the community</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>halvergeng@halvermusic.com</h5>
            <a href="mailto:halvergeng@halvermusic.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <TbBrandMessenger className='contact__option-icon' />
            <h4>Send a DM</h4>
            <h5>via Instagram</h5>
            <a href="mailto:halvergeng@halvermusic.com">Send a DM</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */} 
        <form action=''>
      <input aria-label="Your first name" name="fields[first_name]" placeholder="Your first name" type="text" required />
      <input aria-label="Your email address" name="email_address" placeholder="Your email address" required type="email" />
      <button className='btn btn-primary'>SUBSCRIBE</button>
    </form>
      </div>
    </section>
  )
}

export default Contact