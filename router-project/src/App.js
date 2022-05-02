
import './App.css';
import {Navroute} from './routes/Navroute'
import {Footroute} from './routes/Footroute'
import {AuthProvider} from '../src/components/Provider/AuthProvider'
function App() {
  return (
    <div className="App">
     <AuthProvider>
   < Navroute/>
   <Footroute/>
     </AuthProvider>
    </div>
  );
}

export default App;
