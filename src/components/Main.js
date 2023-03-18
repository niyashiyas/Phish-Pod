import React,{useState} from 'react'
import './Main.css'
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


      <div className="page-2">
        <h1 className='head'>Check for Spam</h1>
        <form>
         <label htmlFor="name">Name:</label>
		      <input type="text" id="name" name="name" placeholder="Enter your name" />

		      <label htmlFor="message">Message:</label>
		      <textarea id="message" name="message" placeholder="Enter your message"></textarea>

		      <button type="submit">Submit</button>
        </form>
      </div>      
      
    </>

  );
}
export default Main;