import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import JoinUs from './JoinUs';
import Settings from './Settings';

function App() {
  return (
    <>
 <TodoList/>
  <ul>
    <li>Android</li>  
    <li>Blackberry</li>
    <li>I phone</li>
    <li>Windows Phone</li>
  </ul>
  <div>
    <h1>Mobile Manufacturer</h1>
    <ul>

     <li>Samsung</li>
     <li>HTC</li>
     <li>Micromax</li>
     <li>Apple</li>
    </ul>
    </div>
    <JoinUs/>
    <Settings/>
    </>

  );
}

export default App;
