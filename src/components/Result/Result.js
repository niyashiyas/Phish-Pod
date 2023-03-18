import React from 'react';
import Navbar from '../Navbar';
import './Result.css';

const Result = (props) => {
  return (
    <div>
      <div className='resultsBox'>
        <h1>Results</h1>
        <div className='resultsContent'>
            <img src = './images/results-img.png'></img>
            <p>This message has been reported spam by {props.num} people!</p>
            <button className='reportButton'>Report Now!</button>
        </div>
      </div>
    </div>
  )
}

export default Result;
