
import './App.css';
import './components/navbar.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import { Shop } from './pages/Shop/Shop';
import {Cart} from './pages/cart/Cart';


function App() {
  return (
    <div className="App">
      
        <Router>
          {/* because navbar should be available in every page despite of the route. */}
          <Home/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/cart' element ={<Cart/>}/>
          </Routes>
        

        </Router>
    </div>
  );
}

export default App;
