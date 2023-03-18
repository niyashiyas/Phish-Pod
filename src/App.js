import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Form from './components/Form';
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Main />                     
        {/* ⬆️ Landing Page ⬆️*/}
        {/* <Navbar />
        <Form />   */}
        {/* ⬆️ Form Page ⬆️ */}                       
      </div>
    </>
  );
}

export default App;
