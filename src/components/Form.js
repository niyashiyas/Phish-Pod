import React from 'react';
import './Form.css';
function Form(){
    return(
        <form>
            <div className='container'>
                <div className="sms-id">
                    <input type="text" placeholder="SMS sender ID"></input>
                </div>
                <div className="sms">
                    <textarea rows='15' columns='75' placeholder='Enter your message'></textarea>
                </div>
                <div className="submit">
                    <button>SUBMIT</button>
                </div>
            </div>
        </form>
    );
}
export default Form;