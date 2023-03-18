import React, {useState} from "react";
import "./Form.css";
function Form() {
  const [formData, setFormData] = useState("");
  const [result, setResult] = useState("");
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const urlPattern =
    // /((https?|ftp):\/\/)?([a-z]+\.)?[a-z0-9]+\.[a-z]{2,}(\.[a-z]{2,})?(\/[a-z0-9#?&=.\/-]+)?/g;
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%\+.~#?&//=]*)/g;
  const phonePattern = /(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}/g;

  const extract = (text, pattern) => {
    return text.match(pattern);
  };

  const tProcess = () => {
    let object = formData;
    const ep = extract(object, emailPattern);
    const up = extract(object, urlPattern);
    let pp = extract(object, phonePattern);
    {
      if (pp[0].length > 10) {
        console.log("hi");
        pp[0] = pp[0].substring(3, 13);
      }
    }
    console.log(pp);
    console.log(up);
    console.log(ep);
    setResult(`${ep} | ${up} | ${pp}`);
    console.log(result);
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
                //console.log(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
      </form>
      <div className="submit">
        {/* {console.log(formData)} */}
        <button onClick={tProcess}>SUBMIT</button>
      </div>
    </>
  );
}
export default Form;
