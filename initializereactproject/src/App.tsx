import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Customer from './pages/Customer';
import Order from './pages/Order';
import Item from './pages/Item';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/customer" element={<Customer/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/item" element={<Item/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
