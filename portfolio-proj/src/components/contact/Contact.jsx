import React, { useRef } from 'react'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import emailjs, { send } from 'emailjs-com'
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4mjseqn', 'template_5bn48ps', form.current, 'zvrmuYL7KnHuoNHke')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          
          <article className="contact__option">
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jwplee@ucdavis.edu</h5>
            <a href="mailto:jwplee@ucdavis.edu" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>jaewoolee1230</h5>
            <a href="https://www.linkedin.com/in/jaewoolee1230/" target="_blank">Send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact