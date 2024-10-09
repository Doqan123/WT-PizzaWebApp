import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Hero from './components/Hero';
import OrderForm from './components/OrderForm';
import TotalPriceCalculator from './components/TotalPriceCalculator';  
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

function App() {
  const initialFormData = {
    totalPrice: 0,  
    size: "",
    dough: "",
    topping: [],
    userName: "",
    orderNote: "",
    quantity: 1,
    extraToppingPrice: 5,  
  };

  const maxCheckBox = 10;
  const minCheckBox = 4;

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
        setFormData((prevFormData) => {
            let updatedToppings;

            if (checked) {
                // Seçim yapıldığında
                updatedToppings = [...prevFormData[name], value];
                return {
                    ...prevFormData,
                    [name]: updatedToppings,
                };
            } else {
                // Seçim kaldırıldığında
                updatedToppings = prevFormData[name].filter((item) => item !== value);
                return {
                    ...prevFormData,
                    [name]: updatedToppings,
                };
            }
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
    let valid = true;
  
    // Validasyon Kontrolleri
    if (!formData.size) {
      toast.error("Lütfen bir boyut seçin.");
      valid = false;
    }
  
    if (!formData.dough) {
      toast.error("Lütfen bir hamur seçin.");
      valid = false;
    }
  
    if (formData.topping.length < minCheckBox || formData.topping.length > maxCheckBox) {
      toast.error(`Malzeme sayısı ${minCheckBox} ile ${maxCheckBox} arasında olmalıdır.`);
      valid = false;
    }
  
    const nameRegex = /^[a-zA-ZğüşıİĞÜŞÇÖç\s]+$/;
    if (!nameRegex.test(formData.userName)) {
      toast.error("Geçersiz isim ve soyisim.");
      valid = false;
      console.log("Kullanıcı adı:", formData.userName);
console.log("Regex sonucu:", nameRegex.test(formData.userName));

    }
  
    // Eğer validasyonlar geçilmişse formu gönder
    if (valid) {
      try {
        const response = await axios.post('https://reqres.in/api/pizza', formData);
        toast.success("Sipariş başarıyla gönderildi!");
        console.log('Başarıyla gönderildi:', response.data);
      } catch (error) {
        toast.error("Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.");
        console.error('Hata:', error);
      }
    }
  };
  
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route path="/order">
          <OrderForm 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
          />
          <TotalPriceCalculator 
            formData={formData} 
            pizzaPrice={85.50}  
            setFormData={setFormData}  
          />
          {formData.totalPrice}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
