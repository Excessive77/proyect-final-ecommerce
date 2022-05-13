
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Shop from './pages/Shop';
import Product from './pages/Product';
import ProtectedPages from './pages/ProtectedPages';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      
        <Routes>
          {/* Public routes */}
          <Route path='login' element={<Login />}/>
          <Route path='signup'/>
              {/* Private routes */}
            <Route element={<ProtectedPages />}>
              <Route path='/'/>          
              <Route path='shop' element={<Shop />}/>          
              <Route path='shop/:id' element={<Product />}/>          
              <Route path='cart' element={<Cart />}/>          
              <Route path='cart/success' element={<h1>Gracias por tu compra!</h1>}/>          
            </Route>
        </Routes>

    </div>
  );
}

export default App;
