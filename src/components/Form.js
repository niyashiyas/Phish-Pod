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
    console.log("pp: " + pp);
    console.log("up: " + up);
    console.log("ep: " + ep);
    //setResult(`${ep}`);
    //console.log(result);

    console.log("hi");
    axios
      .get(
        `https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_8zxGo4RMsNLKBYE6nmSRgPSq0qz7S&emailAddress=${ep[0]}`
      )
      .then((response) => {
        console.log(response);
        console.log("Disposible: " + response.data.disposableCheck);
        console.log("SMTP: " + response.data.smtpCheck);
        if (
          response.data.disposableCheck === "true" ||
          response.data.smtpCheck === "false"
        ) {
          console.log("The Email doesnt exist");
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
        console.log("Carrier: " + res.data.carrier);
        console.log("Number Valid: " + res.data.valid);
      });

    //URL
    axios
      .get(
        `https://endpoint.apivoid.com/urlrep/v1/pay-as-you-go/?key=7ee7e77ff7940a5058c538c320e7992c8c29abd2&url=${up[0]}/`
      )
      .then((r) => {
        console.log(r);
        console.log(r.data.data.report.risk_score);
      });
  };

  const extract = (text, pattern) => {
    return text.match(pattern);
  };

  return (
    <>
      <form>
        <div className="container">
          <div className="sms-id">
            <input type="text" placeholder="SMS sender ID"></input>
          </div>
          <div className="sms">
            <textarea
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
        <button onClick={tProcess}>SUBMIT</button>
      </div>
    </>
  );
}
export default Form;
