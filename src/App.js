import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
      <h1>hello app</h1>
      
      
      <Footer/>
    </div>
  )
}

export default App;