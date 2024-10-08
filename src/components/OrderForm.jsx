import FormNavbar from "./FormNavbar";
import "../styles/OrderForm.css"
import PizzaType from "./PizzaType";

// bu forma seçilen bir piza gelmeli normalde ama projede bu istenmemiş. yinede gelen bu pizzanın ismini ve fiyatını değiştirecek bir component olabilir pizzaInfo gibi.
//bu componentten price, title, pizzaLike gibi propslar gelebilir. bunları ilk başta statik olarak oluşturacağım daha sonra dinamik olarak tasarlayabilirim.

function OrderForm({ formData, handleChange }) {
    
    // daha sonra bu pizzayı bir array içinde objeye alaayım useState kullanarak map ile buraya öyle yazdırayım. 
    
    return (
        <section className="order-form">
            <FormNavbar />
            <div className="formContainer">
                <h3>Position Absolute Acı Pizza</h3>
                <div className="priceAndPoint">
                    <h2>85.50</h2>
                    <p>4.5</p>
                    <p>(200)</p>
                </div>
                <div className="description">
                    Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
                </div>

                
                    <form>
                    <PizzaType
                        changeFn={handleChange}
                        checked={formData.size === "küçük"}
                        fieldName={"size"}
                        value={"küçük"}
                        label={"Küçük"}
                    />
                    <PizzaType
                        changeFn={handleChange}
                        checked={formData.size === "orta"}
                        fieldName={"size"}
                        value={"orta"}
                        label={"Orta"}
                    />
                     <PizzaType
                        changeFn={handleChange}
                        checked={formData.size === "büyük"}
                        fieldName={"size"}
                        value={"büyük"}
                        label={"Büyük"}
                    />
                
                    </form>
                   
            </div>



        </section>


    )
}

export default OrderForm;