import { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import OrderForm from './components/OrderForm';
import TotalPriceCalculator from './components/TotalPriceCalculator';  // Yeni bileşeni içe aktar
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

function App() {
  const initialFormData = {
    totalPrice: 0,  // totalPrice artık burada tutuluyor
    size: "",
    dough: "",
    topping: [],
    userName: "",
    orderNote: "",
    quantity: 0,
    extraToppingPrice: 5,  // Artık extraToppingPrice burada
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");
  const maxCheckBox = 10;
  const minCheckBox = 4;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prevFormData) => {
        let updatedToppings;

        if (checked) {
          if (prevFormData[name].length < maxCheckBox) {
            updatedToppings = [...prevFormData[name], value];
            setError(""); 
          } else {
            setError(`Maksimum ${maxCheckBox} seçim yapabilirsiniz.`);
            return prevFormData;
          }
        } else {
          updatedToppings = prevFormData[name].filter((item) => item !== value);

          if (updatedToppings.length < minCheckBox) {
            setError(`En az ${minCheckBox} seçim yapmalısınız.`);
          } else {
            setError("");
          }
        }

        return {
          ...prevFormData,
          [name]: updatedToppings,
        };
      });
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://reqres.in/api/pizza', formData);
      console.log('Başarıyla gönderildi:', response.data);
    } catch (error) {
      setError("Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.");
      console.error('Hata:', error);
    }
  };

  useEffect(() => {
    console.log("Form Data:", formData);
  }, [formData]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route path="/order">
          <OrderForm 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            error={error}  
          />
          {/* TotalPriceCalculator burada kullanılacak */}
          <TotalPriceCalculator 
            formData={formData} 
            pizzaPrice={85.50}  // Pizza fiyatını geçir
            setFormData={setFormData}  // formData'yı güncellemek için gönder
          />
          {formData.totalPrice}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
