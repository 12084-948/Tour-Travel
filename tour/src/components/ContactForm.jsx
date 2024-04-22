import React from 'react'
import './contactform.css'

const ContactForm = () => {
  return (
    <div>
        <div className='formContainer'>
            <h1>Send a message to Us!</h1>
            <form >
                <input type="text" placeholder='Enter Your Name..' />
                <input type="text" placeholder='Enter Your Email..' />
                <input type="text" placeholder='Enter Subject..' />
                <textarea placeholder='Enter Your Message' rows="4"></textarea>
                <button className='cBtn'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm