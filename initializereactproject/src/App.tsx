import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Customer from './pages/Customer';
import Order from './pages/Order';
import Item from './pages/Item';
import SignIn from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>} />
        <Route path="/login" element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
