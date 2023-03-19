import React from "react";
import "./Main.css";
import Form from "./Form";
import Footer from "./Footer/Footer";
//import Result from "./Result/Result";
function Main() {
  return (
    <>
      <div className="page-1">
        <div className="main-content">
          <div>
            <div>
              <h1 className="main-heading">BETTER SAFE THAN SORRY</h1>
            </div>
            <div>
              <p className="main-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
            <button className="get-started">GET STARTED</button>
          </div>

          {/* <img src='./images/blob.png' alt='' className='blob' /> */}
          <img src="./images/mainpic.png" alt="" className="mainpic" />
        </div>
      </div>
      <Form />

      <Footer />
    </>
  );
}
export default Main;
