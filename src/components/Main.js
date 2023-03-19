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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
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
