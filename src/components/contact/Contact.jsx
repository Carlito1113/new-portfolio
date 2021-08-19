import React from 'react';
import { useState } from 'react';
import './Contact.scss';
import adrianblacksands from '../../assets/img/adrianblacksands.jpg';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [message, setMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_r0laelk', 'template_d932vm6', e.target, "user_y6VmyAoeST51goHoaPNmm")
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
      e.target.reset()

      setMessage(true);
  }

  return (
    <div className="contact" id="contacts">
      <div className="left">
        <img src={adrianblacksands} alt="" />
      </div>

      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={sendEmail}>
          <input type="email" placeholder="Email" name='email' />
          <textarea placeholder='Your Message' name='message'></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply ASAP.</span>}
        </form>
      </div>
    </div>
  );
}
