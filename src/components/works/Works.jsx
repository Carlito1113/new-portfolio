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
    <div>
      {/* <h1 className='h1test'>My Work</h1> */}

      <div className="work">
        <h1 className='h1test2'>My Work</h1>
        <img src={recipebook} alt="" className="work__image work__image--p1" />
        <img src={recommend} alt="" className="work__image work__image--p2" />
        <img src={audiophyle} alt="" className="work__image work__image--p3" />
        <img src={wineanddines} alt="" className="work__image work__image--p4" />
        <img src={fitnesstracker} alt="" className="work__image work__image--p5" />
        <img src={expensetracker} alt="" className="work__image work__image--p6" />
      </div>
    </div>
  );
}
