import "../styles/OrderSum.css";

function OrderSum({ formData, handleSubmit }) {
    const toppingCost = formData.topping.length * formData.extraToppingPrice;

    return (
        <div className="toppings-container">
            <div className="toppings-data">
                <div className="baslik">Sipariş Toplamı</div>
                <div className="bos"></div> {/* Boş sütun için bir alan */}
                <div className="seçimler">Seçimler</div>
                <div className="topping-cost"><span>{toppingCost}₺</span></div>
                <div className="toplam">Toplam</div>
                <div className="total-price"><span>{formData.totalPrice}₺</span></div>
            </div>
            <div className="topping-button">
                <button type="button" onClick={handleSubmit}>Siparişi Gönder</button>
            </div>
        </div>
    );
}

export default OrderSum;
