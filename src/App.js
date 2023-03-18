import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Form from './components/Form';
import Glossary from './components/Glossary/Glossary';
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Main />
        <Glossary />                    
      </div>
    </>
  );
}

export default App;
