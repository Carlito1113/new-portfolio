import React from 'react';
import './Works.scss';
import recipebook from '../../assets/img/recipebook.png';
import recommend from '../../assets/img/recommend.png';
import audiophyle from '../../assets/img/Audiophyle.png';
import wineanddines from '../../assets/img/wineanddine.png';
import fitnesstracker from '../../assets/img/fitnesstracker.png';
import expensetracker from '../../assets/img/expensetracker.png';

export default function Works() {
  return (
    <div className="portfolio" id="portfolio">
      <h1 className='header'>My Work</h1>

      <div className="container">
        <div className="item">
          <img src={recommend} alt="Recommend book app" />

          <h3>
            <a
              href="https://recom-mend.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              Recommend
            </a>
          </h3>
        </div>

        <div className="item">
          <img src={recipebook} alt="recipe app" />
          <h3>
            <a
              href="https://recipebook-2096c.web.app/"
              rel="noreferrer"
              target="_blank"
            >
              Recipe Book
            </a>
          </h3>
        </div>
        <div className="item">
          <img src={audiophyle} alt="Audiophyle music app" />
          <h3>
            <a
              href="https://audiophyle-music-platform.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              Audiophyle
            </a>
          </h3>
        </div>
        <div className="item">
          <img src={wineanddines} alt="Food and Wine pairing app" />
          <h3>
            <a
              href="https://andrewrb22.github.io/-.theFederationOfCoders-/"
              rel="noreferrer"
              target="_blank"
            >
              Wine&Dines
            </a>
          </h3>
        </div>
        <div className="item">
          <img src={fitnesstracker} alt="Fitness Logging application" />
          <h3>
            <a
              href="https://infinite-journey-49679.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              Fitness Logger
            </a>
          </h3>
        </div>
        <div className="item">
          <img src={expensetracker} alt="Expense Tracking Application" />
          <h3>
            <a
              href="https://damp-falls-85688.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              Expense Tracker
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}
