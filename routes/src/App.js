import './App.css';
import React from 'react'
import  Home from './components/Home';
import  {About} from './components/About';
import {Login} from './components/Login';
import {Navbar} from './components/Navbar'
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
  
  <Navbar/>
 <Routes>
  <Route path="home" element={<Home/>}/>
  <Route path="about" element={<About/>}/>
  <Route path="login" element={<Login/>}/>
 </Routes>
  </div>
  );
}

export default App;
