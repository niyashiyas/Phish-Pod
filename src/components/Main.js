import React,{useState} from 'react'
import './Main.css'
import Form from './Form';
function Main(){
  return(
    <>
      <div className="page-1">
        <div className="main-content">
          <div>
            <div>
              <h1>HERE GOES THE TITLE</h1>
            </div>
            <div>
              <p>write something here</p>
            </div>
            <div>
              <p>and here</p>
            </div>
          </div>
          <img src='./images/landing.png' alt='' />
        </div>
        <button className="get-started" href=".page-2">GET STARTED</button>
      </div>
      <Form />

      
            
      
    </>

  );
}
export default Main;