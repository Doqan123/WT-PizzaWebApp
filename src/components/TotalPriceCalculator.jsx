import { useEffect } from 'react';

function TotalPriceCalculator({ formData, pizzaPrice, setFormData }) {

  const calculateTotalPrice = () => {
    const toppingCost = formData.topping.length * formData.extraToppingPrice;  // extraToppingPrice formData'dan alınacak
    const pizzaCost = pizzaPrice * (formData.quantity );
    return pizzaCost + toppingCost;
  };

  useEffect(() => {
    const totalPrice = calculateTotalPrice();  
    setFormData((prevFormData) => ({
      ...prevFormData,
      totalPrice,  
    }));
  }, [formData.topping, formData.quantity, formData.extraToppingPrice, pizzaPrice, setFormData]);  

  return null;
}

export default TotalPriceCalculator;
