import FormNavbar from "./FormNavbar";
import "../styles/OrderForm.css";
import PizzaSize from './PizzaSize';
import DoughSelection from './DoughSelection';
import PizzaInfo from './PizzaInfo';
import toppingsData from '../data/toppings.json'; // JSON'dan malzemeleri al
import Topping from "./Topping";
import NameSurname from "./NameSurname";
import TextArea from "./TextArea"; // TextArea bileşenini içe aktar

import { useState } from 'react';

function OrderForm({ formData, handleChange, handleSubmit, error,  }) {

    const sizeData = ["Küçük", "Orta", "Büyük"];
    const pizzaData = {
        title: "Position Absolute Acı Pizza",
        price: 85.50, // Pizza fiyatı
        rating: 4.5,
        reviews: 200,
        description: `Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
         Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, 
         daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, 
         düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . 
         Küçük bir pizzaya bazen pizzetta denir.`
    };
  

   
 

    return (
        <section className="order-form">
            <FormNavbar />
            <div className="formContainer">
                <PizzaInfo
                    title={pizzaData.title}
                    price={ pizzaData.price}
                    rating={pizzaData.rating}
                    reviews={pizzaData.reviews}
                    description={pizzaData.description}
                />
                <form onSubmit={handleSubmit}> {/* onSubmit prop'u ile handleSubmit fonksiyonunu bağla */}
                    <h3>Boyut Seç</h3>
                    {sizeData.map((size, index) => (
                        <PizzaSize
                            key={index}
                            changeFn={handleChange}
                            checked={formData.size === size}
                            fieldName={"size"}
                            value={size}
                            label={size}
                        />
                    ))}

                    <h3>Hamur Seç</h3>
                    <DoughSelection
                        changeFn={handleChange}
                        selectedDough={formData.dough}
                    />

                    <h3>Ekstra Malzemeler</h3>
                    <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    {toppingsData.map((topping) => (
                        <Topping
                            key={topping.id}
                            changeFn={handleChange}
                            checked={formData.topping.includes(topping.name)}
                            fieldName="topping"
                            value={topping.name}
                            label={topping.name}
                        />
                    ))}

                    <h3>Ad ve Soyad</h3>
                    <NameSurname
                        changeFn={handleChange}
                        values={formData.userName} // firstName ve lastName değerlerini geçir
                    />

                    <h3>Sipariş Notu</h3>
                    <TextArea
                        value={formData.orderNote} // formData'dan sipariş notunu al
                        changeFn={handleChange} // handleChange fonksiyonunu geçir
                        fieldName="orderNote" // alan adını belirt
                    />

                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        min="1"
                    />
                    <h1>{formData.totalPrice}</h1>

                    <button type="submit">Siparişi Gönder</button> {/* Submit butonu */}
                </form>
                
                {error && <p style={{ color: "red" }}>{error}</p>}

            </div>
        </section>
    );
}

export default OrderForm;
