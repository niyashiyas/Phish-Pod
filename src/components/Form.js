import React, {useState} from "react";
import "./Form.css";
import axios from "axios";
import {Link, Routes, Route, Router} from "react-router-dom";
import Result from "./Result/Result";
var de = "";
var se = "";
var em = "";
var ca = "";
var nv = "";
var mb = "";
var ur = "";
var urd = "";
var du = "";
var ud = "";

function Form() {
  const [formData, setFormData] = useState("");
  const [result, setResult] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [routeButton, setRouteButton] = useState(false);
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const urlPattern =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%\+.~#?&//=]*)/g;
  const phonePattern = /(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}/g;

  var ep = [{}];
  var up = [{}];
  let pp = [{}];

  const tProcess = async () => {
    let object = formData;
    ep = extract(object, emailPattern);
    up = extract(object, urlPattern);
    pp = extract(object, phonePattern);
    {
      if (pp[0].length > 10) {
        pp[0] = pp[0].substring(3, 13);
      }
    }
    console.log("Phone No : " + pp);
    console.log("URL : " + up);
    console.log("Email : " + ep);
    //setResult(`${ep}`);
    //console.log(result);

    setResult(pp);
    console.log("results");

    await axios
      .get(
        `https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_8zxGo4RMsNLKBYE6nmSRgPSq0qz7S&emailAddress=${ep[0]}`
      )
      .then((response) => {
        console.log(response);
        console.log("Disposable Email : " + response.data.disposableCheck);
        de = response.data.disposableCheck;

        console.log("Email SMTP Test : " + response.data.smtpCheck);
        se = response.data.smtpCheck;

        if (
          response.data.disposableCheck === "true" ||
          response.data.smtpCheck === "false"
        ) {
          console.log("Email found malicious");
          em = "Email found malicious";
        } else {
          console.log("Email not found malicious");
          em = "Email not found malicious";
        }
      });

    //PHONE NUMBER
    await axios
      .get(
        `https://api.numlookupapi.com/v1/validate/+91${pp[0]}?apikey=KhTyAyKtRpuCisqx7mrLZ2N7hCz7FGi0rSOC6pHI`
      )
      .then((res) => {
        console.log(res);
        console.log("Carrier : " + res.data.carrier);
        ca = res.data.carrier;
        console.log("Number Valid : " + res.data.valid);
        nv = res.data.valid;
        if (ca === "") {
          mb = "Spam Number";
        }
      });

    //URL
    await axios
      .get(
        `https://endpoint.apivoid.com/urlrep/v1/pay-as-you-go/?key=83e829dbb8cdb1e6f9c306e114bb860b6172d606&url=${up[0]}/`
      )
      .then((r) => {
        console.log(r);
        console.log("URL Risk Score : " + r.data.data.report.risk_score.result);
        ur = r.data.data.report.risk_score.result;
        if (ur > 45) {
          urd = "Malicious";
        } else {
          urd = "Not Malicious";
        }
        console.log(
          "Detect Malicious URL : " +
            r.data.data.report.domain_blacklist.detections
        );
        du = r.data.data.report.domain_blacklist.detections;
        console.log(
          "URL Redirection : " + r.data.data.report.redirection.found
        );
        ud = r.data.data.report.redirection.found;
      });
    setShowButton(true);
  };

  const extract = (text, pattern) => {
    return text.match(pattern);
  };

  return (
    <>
    <br/><br />
      <h1 style={{color: "white", fontSize: "36px", textAlign: "center"}}>Check for Spam</h1>
      <div className="checkSpam">
        <div className="checkContent">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <br />
          <form>
            <input type="text" id="name" name="name" placeholder="Sender ID" />
            <br />
            <br />
            <textarea
              id="message"
              name="message"
              rows="6"
              cols="90"
              placeholder="SMS"
              onChange={(e) => {
                setFormData(e.target.value);
              }}
            ></textarea>
            <br />
          </form>
          <button
            style={{width: "100px"}}
            className="submitSpamButton"
            onClick={tProcess}
          >
            Submit
          </button>
          <div>
            {showButton && (
              <button
                className="result-button"
                onClick={() => setRouteButton(true)}
              >
                Check Result
              </button>
            )}
          </div>
        </div>

        <div className="checkHelp">
          <br />
          <h4>Steps to Check for Spam</h4>
          <div className="step1">
            <p>Enter Sender ID and SMS in the respective boxes.</p>
          </div>
          <div className="step2">
            <p>Click on 'Search'.</p>
          </div>
          <div className="step3">
            <p>
              Result will be displayed showing if it is spam or not. You have an
              option to report the SMS to Indian Cyber Crime Coordination Centre
            </p>
          </div>
        </div>
      </div>
      <div>
        {console.log(nv + " phone : " + pp)}
        {routeButton ? (
          <Result
            // phone={phone}
            // ep={ep[0]}
            // up={up[0]}
            de={de}
            se={se}
            em={em}
            ca={ca}
            nv={nv}
            mb={mb}
            ur={ur}
            urd={urd}
            du={du}
            ud={ud}
          />
        ) : null}
      </div>
    </>
  );
}
export default Form;
