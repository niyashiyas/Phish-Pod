import React from 'react';
import Navbar from '../Navbar';
import './Result.css';

const Result = (props) => {
  return (
    <div>
      <div className='resultsBox'>
        <h1 style={{fontSize: "42px"}}>Results</h1>
        <br/>
        <div className='resultsContent'>
            <img src = './images/results-img.png'></img>
            <p>This message has been reported spam by {props.num} people!</p>
            <button className='reportButton'><a href='https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx' target={"_blank"}>Report Now!</a></button>
        </div>
      </div>
    </div>
  )
}

export default Result;
