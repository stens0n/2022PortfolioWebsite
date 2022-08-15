import React from 'react';
import './contact.css'; 
import { MdOutlineEmail } from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href='mailto:dummyemail@gmail.com' target='_blank'>Send a message</a>
          </article>


          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>dummy name</h5>
            <a href='mailto:dummyemail@gmail.com' target='_blank'>Send a message</a>
          </article>


          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whats App</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href='mailto:dummyemail@gmail.com' target='_blank'>Send a message</a>
          </article>

        </div>

      </div>
    </section>
  )
}

export default Contact