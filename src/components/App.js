import React, { useState } from 'react';
import Home from './Home';
import OrderForm from './OrderForm';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [orderPayForm, setOrderPayForm] = useState(false)
  
  function toggleOrderForm() {
    setOrderPayForm(orderPayForm => !orderPayForm)
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderForm orderPayForm={orderPayForm} toggleOrderForm={toggleOrderForm} />} />
      </Routes>
    </div>
  );
}

export default App;
