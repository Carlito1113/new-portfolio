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
    // <div className="work" id="portfolio">
    //   <h1 className="work__header">My Work</h1>
    //     <a
    //       href="https://recipebook-2096c.web.app/"
    //       rel="noreferrer"
    //       target="_blank"
    //     >
    //       <img
    //         src={recipebook}
    //         alt="recipebook app"
    //         className="work__image work__image--p1"
    //       />
    //     </a>
    //     <a
    //       href="https://recom-mend.herokuapp.com"
    //       rel="noreferrer"
    //       target="_blank"
    //     >
    //       <img
    //         src={recommend}
    //         alt="recommend app"
    //         className="work__image work__image--p2"
    //       />
    //     </a>
    //     <a
    //       href="https://audiophyle-music-platform.herokuapp.com/"
    //       rel="noreferrer"
    //       target="_blank"
    //     >
    //       <img
    //         src={audiophyle}
    //         alt="audiophyle app"
    //         className="work__image work__image--p3"
    //       />
    //     </a>
    //     <a
    //       href="https://andrewrb22.github.io/-.theFederationOfCoders-/"
    //       rel="noreferrer"
    //       target="_blank"
    //     >
    //       <img
    //         src={wineanddines}
    //         alt="wine and dines app"
    //         className="work__image work__image--p4"
    //       />
    //     </a>
    //     <a
    //       href="https://infinite-journey-49679.herokuapp.com/"
    //       rel="noreferrer"
    //       target="_blank"
    //     >
    //       <img
    //         src={fitnesstracker}
    //         alt="fitness tracker app"
    //         className="work__image work__image--p5"
    //       />
    //     </a>
    //     <a
    //       href="https://damp-falls-85688.herokuapp.com/"
    //       rel="noreferrer"
    //       target="_blank"
    //     >
    //       <img
    //         src={expensetracker}
    //         alt="expense tracker app"
    //         className="work__image work__image--p6"
    //       />
    //     </a>
    // </div>

    <div className="works" id='portfolio'>
      <div className="portfolio">
        <div className="portfolio__project">
          <div className="portfolio__project--box">
            <a
              href="https://recipebook-2096c.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={recipebook}
                alt="recipe app"
                className="portfolio__project--image"
              />
            </a>
            <p>some description of the app</p>
          </div>
        </div>
        <div className="portfolio__project">
          <div className="portfolio__project--box">
            <a
              href="https://recipebook-2096c.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={recommend}
                alt="recipe app"
                className="portfolio__project--image"
              />
            </a>
            <p>some description of the app</p>
          </div>
        </div>
        <div className="portfolio__project">
          <div className="portfolio__project--box">
            <a
              href="https://recipebook-2096c.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={audiophyle}
                alt="recipe app"
                className="portfolio__project--image"
              />
            </a>
            <p>some description of the app</p>
          </div>
        </div>
        <div className="portfolio__project">
          <div className="portfolio__project--box">
            <a
              href="https://recipebook-2096c.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={wineanddines}
                alt="recipe app"
                className="portfolio__project--image"
              />
            </a>
            <p>some description of the app</p>
          </div>
        </div>
        <div className="portfolio__project">
          <div className="portfolio__project--box">
            <a
              href="https://recipebook-2096c.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={fitnesstracker}
                alt="recipe app"
                className="portfolio__project--image"
              />
            </a>
            <p>some description of the app</p>
          </div>
        </div>
        <div className="portfolio__project">
          <div className="portfolio__project--box">
            <a
              href="https://recipebook-2096c.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={expensetracker}
                alt="recipe app"
                className="portfolio__project--image"
              />
            </a>
            <p>some description of the app</p>
          </div>
        </div>
      </div>
    </div>
  );
}
