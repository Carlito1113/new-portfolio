import React from 'react';
import './Navigation.scss';

export default function Navigation( {navOpen ,setNavOpen} ) {
  return (
    <div className="navigation">
      <input type="button" onClick={() => {setNavOpen(!navOpen)}} className="navigation__checkbox" id="nav-toggle" />

      <label htmlFor="nav-toggle" className="navigation__button" id="nav-label">
        <span className={"navigation__icon " + (navOpen && 'active--icon')}>&nbsp;</span>
      </label>

      <div className={"navigation__background " + (navOpen && 'active') }>&nbsp;</div>

      <nav className={"navigation__nav " + (navOpen && 'active--nav')}>
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#intro" className="navigation__link">
              <button onClick={() => setNavOpen(!navOpen)} className="navigation__button--2">
                Intro
              </button>
            </a>
          </li>
          <li className="navigation__item">
            <a href="#portfolio" className="navigation__link">
              <button onClick={() => setNavOpen(!navOpen)} className="navigation__button--2">
              Portfolio
              </button>
            </a>
          </li>
          <li className="navigation__item">
            <a href="#contacts" className="navigation__link">
              <button onClick={() => setNavOpen(!navOpen)} className="navigation__button--2">
                Contacts
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
