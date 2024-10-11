import "../styles/SubmitForm.css"
import styles from '../styles/Hero.module.css';
import Logo from '/Assets/Iteration-1-assets/logo.svg';
import OrderSum from "./OrderSum";


function SubmitForm({ formData, handleSubmit }) {
    return (
        <section className='submit-section'>
            <div className="submit-form-container">
                <img className={styles.logo} src={Logo} alt="logo" />
                <p>fırsatı kaçırma</p>
                <h1>Sipariş Alındı</h1>
            </div>

            <div className="order-info">
               
                <h3>Position Absolute Acı Pizza</h3>

                <div className="general-info">   
                     <div className="order-info-main"></div>
                    <p>Boyut: {formData.size}</p>
                    <p>Hamur: {formData.dough}</p>
                    <p>Ekstra Malzemeler: {formData.topping.join(', ')}</p>
                </div>

                <div className="final-cost">
                    <h5>Siparş Toplamı</h5>
                    <div className="secimler">
                        <p>Seçimler</p>
                        <span>{formData.extraToppingPrice * formData.topping.length}₺</span>
                    </div>
                    <div className="toplam-fiyat">
                        <p>Toplam Fiyat:</p>
                        <span>{formData.totalPrice}₺</span>
                    </div>
                </div>

            </div>



        </section>
    );
}

export default SubmitForm;
