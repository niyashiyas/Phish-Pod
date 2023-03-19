import React from "react";
import "./Main.css";
import Form from "./Form";
import Footer from "./Footer/Footer";
import Result from "./Result/Result";
import {Link, Routes, Route} from "react-router-dom";
function Main() {
  return (
    <>
      <div className="main">
        <div className="main-content">
          <div className="main-contents">
            <h1 className="main-heading">BETTER SAFE THAN SORRY</h1>
            <p className="main-p">
            Are you tired of receiving suspicious text messages that claim to be from legitimate sources such as your bank or the government? These types of messages often contain links that can lead to fraudulent websites or ask for personal information such as your credit card details. This is known as SMS fraud, and it's a growing problem that affects millions of people every year.
            </p>
            <button className="get-started">GET STARTED</button>
          </div>
          {/* </div>
            <Link to="/form">
              <button className="get-started">GET STARTED</button>
            </Link>
            <Routes>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
          </div> */}
          <div className="imgContainer">
            <img src="./images/mainpic.png" alt="" className="mainpic" />
          </div>
        </div>
      </div>

      <Form />
      <Footer />
    </>
  );
}
export default Main;
