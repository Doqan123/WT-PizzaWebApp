import { useState } from 'react';
import reactLogo from './assets/react.svg';
import workintech from '/workintech.svg';
import './App.css';
import Hero from './components/Hero';
import OrderForm from './components/OrderForm';
import { Route, Switch } from 'react-router-dom';  // Yalnızca v5 bileşenleri kullanılmalı

//ek malzemeleri bir json dosyasında bir array şeklinde tutayım (label name gibi) sonra bunlar map ile 

function App() {
  const initialFormData = {
    prize:"",
    rating:"",
    size:"",
    dough:"",
    topping:"",
    userName:"",
    userEmail:"",
    orderNote:"",
    quantity:"", // bu bir counter butonu gibi olacak


  }
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <Switch>
        {/* Route bileşeninde 'exact' prop'u burada verilmeli */}
        <Route exact path="/">
          <Hero />
        </Route>
        <Route path="/order" >
          <OrderForm formData={formData} handleChange={handleChange} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
