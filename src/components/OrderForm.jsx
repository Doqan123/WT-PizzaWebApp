import FormNavbar from "./FormNavbar";
import "../styles/OrderForm.css";
import PizzaSize from './PizzaSize';
import DoughSelection from './DoughSelection';
import PizzaInfo from './PizzaInfo';
import toppingsData from '../data/toppings.json';
import Topping from "./Topping";
import NameSurname from "./NameSurname";
import TextArea from "./TextArea";
import QuantitySelector from "./QuantitySelector"; // Yeni bileşeni içe aktar
import OrderSum from "./OrderSum";



function OrderForm({ formData, handleChange, handleSubmit, error }) {
    const sizeData = ["Küçük", "Orta", "Büyük"];
    //başka pizzalar olsaydı pizza datayı json dosyasında tutmak mantıklı olabilirdi.
    const pizzaData = {
        title: "Position Absolute Acı Pizza",
        price: 85.50,
        rating: 4.5,
        reviews: 200,
        description: `Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
         Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, 
         daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, 
         düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . 
         Küçük bir pizzaya bazen pizzetta denir.`
    };

    const handleQuantityChange = (newQuantity) => {
        handleChange({ target: { name: 'quantity', value: newQuantity } });
        
    };

    return (
        <section className="order-form">
            <FormNavbar />
            <div className="formContainer">
                {/* PİZZA INFORMATION */}
                <PizzaInfo
                    title={pizzaData.title}
                    price={pizzaData.price}
                    rating={pizzaData.rating}
                    reviews={pizzaData.reviews}
                    description={pizzaData.description}
                />
                {/* FORM COMPONENTLERİ */}
                <form onSubmit={handleSubmit}>
                    {/* PİZZA BOYUT VE HAMUR SEÇİMLERİ */}
                    <div className="size-dough-form-order">
                        {/* Boyut seçimi */}
                        <div className="size-form-order">
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
                        </div>
                        {/* Hamur seçimi */}
                        <div className="dough-form-order">
                            <h3>Hamur Seç</h3>
                            <DoughSelection
                                changeFn={handleChange}
                                selectedDough={formData.dough}
                            />
                        </div>
                    </div>
                    {/* EKSTRA MALZEME SEÇİMİ */}
                    <div className="topping-order-form">
                        <h3>Ekstra Malzemeler</h3>
                        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                        {/* topping map */}
                        <div className="topping-items">
                            {toppingsData.map((topping) => (
                                <Topping
                                    key={topping.id}
                                    changeFn={handleChange}
                                    checked={formData.topping.includes(topping.name)}
                                    fieldName="topping"
                                    value={topping.name}
                                    label={topping.name}
                                    id={`topping-${topping.id}`}
                                />

                            ))}
                        </div>
                    </div>

                    {/* İsim Soyisim alanı */}
                    <div className="nameSurname-form-order">
                        <NameSurname
                            changeFn={handleChange}
                            value={formData.userName}
                            fieldName="userName"
                            label="İsim"
                        />
                        <NameSurname
                            changeFn={handleChange}
                            value={formData.userSurname}
                            fieldName="userSurname"
                            label="Soyisim"
                        />
                    </div>

                    <div className="order-note-form-order">
                        <TextArea
                            value={formData.orderNote}
                            changeFn={handleChange}
                            fieldName="orderNote"
                            label="Sipariş Notu"
                        />
                    </div>

                    {/* Sipariş özeti */}
                    <div className="quantity-and-order-form-order">
                        {/* Adet */}
                        <div className="quantity-form-order">
                            <QuantitySelector
                                quantity={formData.quantity}
                                onQuantityChange={handleQuantityChange}
                            />
                        </div>
                        {/* Toplam Fiyat */}
                        <div className="order-sum-form-order">
                        <OrderSum
                            formData={formData}
                            handleSubmit={handleSubmit} // handleSubmit fonksiyonunu geçir
                        />
                        </div>
                    </div>


                </form>
            </div>
        </section>
    );
}

export default OrderForm;
