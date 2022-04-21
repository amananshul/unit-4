import './App.css';
import  Home from './components/Home';
import  About from './components/About';
import Nav from './components/Nav';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
  <Nav/>
 <Routes>
  <Route path="home" element={<Home/>}/>
  <Route path="about" element={<About/>}/>
 </Routes>
  </div>
  );
}

export default App;
