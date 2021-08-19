import React from 'react';
import './Contact.scss';
import anniestellarcolor from '../../assets/img/annistellarcolor.jpg';

export default function Contact() {
  return (
    <div className="contact" id="contacts">
      <div className="left">
        <img src={anniestellarcolor} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Email" />
          <textarea></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
