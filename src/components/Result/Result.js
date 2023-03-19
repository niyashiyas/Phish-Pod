import React from "react";
import Navbar from "../Navbar";
import "./Result.css";

const Result = ({de, se, em, ca, nv, mb, ur, urd, du, ud}) => {
  return (
    <div>
      <div className="resultsBox">
        <h1 style={{fontSize: "42px"}}>Results</h1>
        <br />
        <div className="resultsContent">
          <img className="image-result" src="./images/results-img.png"></img>
          {console.log(de, se, em, ca, nv, mb, ur, urd, du, ud)}
          <div className="final-result">
            {/* <h6>Phone Number : {pp}</h6> */}
            {/* <h6>Email Id : {ep}</h6>
            <h6>URL : {up}</h6> */}
            <h6>Disposable Email : {de}</h6>
            <h6>Email SMTP Test : {se}</h6>
            <h6>Email Status : {em}</h6>
            <h6>Phone No. Carrier : {ca}</h6>
            <h6>Is Phone No. valid : {nv ? "true" : "false"}</h6>
            <h6>Phone No. Status : {mb}</h6>
            <h6>URL Risk Score : {ur}</h6>
            <h6>Site Status : {urd}</h6>
            <h6>Malicious URL Detection : {du}</h6>
            <h6>URL Redirection : {ud ? "true" : "false"}</h6>
          </div>
          <button className="reportButton">
            <a
              href="https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx"
              target={"_blank"}
            >
              Report Now!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
