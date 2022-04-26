import Navbar from './component/Navbar'
import Body from './component/Body'
import './App.css';
import CartProvider from './component/context/CartProvider';

function App() {
  
  return (
    <div className="App">
      <CartProvider>

 <Navbar/>
 <Body/>
      </CartProvider>
    </div>
  );
}

export default App;
