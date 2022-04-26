import React from  'react'
import {AuthProvider} from './context/AuthProvider';
import Login from './component/Login'
import Nav from './component/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
     <AuthProvider>
       <Nav/>
       <Login/>
       
     </AuthProvider>
    </div>
  );
}

export default App;
