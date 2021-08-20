import React from 'react';
import './Navbar.scss';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

export default function Navbar() {
  return (
    <nav className='navbar' id="intro">
        <h2 className="navbar__logo">{`{C.A}`}</h2>
      <div className="itemContainer">
        <PersonIcon className="icon" />
        <span>+727 331 0237</span>
      </div>
      <div className="itemContainer">
        <MailIcon className="icon"></MailIcon>
        <span>carlito1113@yahoo.com</span>
      </div>
      <div className="itemContainer">
        <a
          href="https://github.com/Carlito1113"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github icon"></i>
        </a>
      </div>
      <div className="itemContainer">
        <span>
          <a
            href="https://www.linkedin.com/in/carlito-algarin-5b29771b1/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in icon"></i>
          </a>
        </span>
      </div>
    </nav>
  );
}
