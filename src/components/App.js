import React, { useState } from 'react';
import Home from './Home';
import OrderForm from './OrderForm';
import { Route, Routes } from 'react-router-dom';
import About from "./About";
import NavBar from './NavBar';


function App() {
  const [orderPayForm, setOrderPayForm] = useState(false)
  
  function toggleOrderForm() {
    setOrderPayForm(orderPayForm => !orderPayForm)
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<OrderForm orderPayForm={orderPayForm} toggleOrderForm={toggleOrderForm} />} />
      </Routes>
    </div>
  );
}

export default App;
