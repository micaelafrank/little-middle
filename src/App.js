import React, { useState } from 'react';
import Home from './Home';
import OrderForm from './OrderForm';
import './App.css';

function App() {
  const [orderPayForm, setOrderPayForm] = useState(false)
  
  function toggleOrderForm() {
    setOrderPayForm(orderPayForm => !orderPayForm)
  }

  return (
    <div>
      <Home />
      <OrderForm orderPayForm={orderPayForm} toggleOrderForm={toggleOrderForm} />
    </div>
  );
}

export default App;
