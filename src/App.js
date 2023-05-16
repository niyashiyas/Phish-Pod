import React from 'react';
import './App.css';
import { Routes ,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Main from './components/Main';
import Form from './components/Form';
import Glossary from './components/Glossary/Glossary';
import Result from './components/Result/Result'
function App() {
  return (
    <>
      
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/glossary" element={
            <>
            <Navbar/>
          <Glossary/>
          <Result /></>
          
            
          } />
        </Routes>
      </div>
    
    </>
  );
}

export default App;







function Home() {
  return (
    <>
      <Navbar />
      <Main />
    </>
   
  );
}