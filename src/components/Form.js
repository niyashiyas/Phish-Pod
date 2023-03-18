import React, {useState} from "react";
import "./Form.css";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState("");
  //const [result, setResult] = useState("");
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const urlPattern =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%\+.~#?&//=]*)/g;
  const phonePattern = /(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}/g;

  var ep;
  var up;
  let pp;
  const tProcess = () => {
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

    axios
      .get(
        `https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_8zxGo4RMsNLKBYE6nmSRgPSq0qz7S&emailAddress=${ep[0]}`
      )
      .then((response) => {
        console.log(response);
        console.log("Disposable Email : " + response.data.disposableCheck);
        console.log("Email SMTP Test : " + response.data.smtpCheck);
        if (
          response.data.disposableCheck === "true" ||
          response.data.smtpCheck === "false"
        ) {
          console.log("Email found malicious");
        } else {
          console.log("Email not found malicious");
        }
      });

    //PHONE NUMBER
    axios
      .get(
        `https://api.numlookupapi.com/v1/validate/+91${pp[0]}?apikey=KhTyAyKtRpuCisqx7mrLZ2N7hCz7FGi0rSOC6pHI`
      )
      .then((res) => {
        console.log(res);
        console.log("Carrier : " + res.data.carrier);
        console.log("Number Valid : " + res.data.valid);
      });

    //URL
    axios
      .get(
        `https://endpoint.apivoid.com/urlrep/v1/pay-as-you-go/?key=33a00c5f1da6b69b4527756477f44402105aa337&url=${up[0]}/`
      )
      .then((r) => {
        console.log(r);
        console.log("URL Risk Score : " + r.data.data.report.risk_score.result);
        console.log(
          "Detect Malicious URL : " +
            r.data.data.report.domain_blacklist.detections
        );
        console.log(
          "URL Redirection : " + r.data.data.report.redirection.found
        );
      });
  };

  const extract = (text, pattern) => {
    return text.match(pattern);
  };

  return (
    <>
      <div>
        {/* <h1>Check for Spam</h1>
    </div>
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
      <form>
        <div className="container">
          <div className="sms-id">
            <input type="text" placeholder="SMS sender ID"></input>
          </div>
          <div className="sms">
            <textarea style={{color: "white"}}
              rows="15"
              columns="75"
              placeholder="Enter your message"
              
              onChange={(e) => {
                setFormData(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
      </form>
      <div className="submit">
        <button style={{color: "white"}} onClick={tProcess}>SUBMIT</button> */}
        <h1>Check for Spam</h1>
        <div className="checkSpam">
          <div className="checkContent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <form>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Sender ID"
              />
              <br />
              <br />
              <textarea
                id="message"
                name="message"
                rows="6"
                cols="50"
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
          </div>
          <div className="checkHelp"></div>
        </div>
      </div>
    </>
  );
}
export default Form;
