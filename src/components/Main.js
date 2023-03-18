import React,{useState} from 'react'
import './Main.css'
import Form from './Form';
import Footer from './Footer/Footer';
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
          
          {/* <img src='./images/blob.png' alt='' className='blob' /> */}
          <img src='./images/mainpic.png' alt='' className='mainpic' /> 
        </div>
        <button className="get-started">GET STARTED</button>
      </div>
      <Form />
      <Footer />
      
            
      
    </>
  );
}
export default Main;