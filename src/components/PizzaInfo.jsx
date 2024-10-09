import '../styles/PizzaInfo.css'; // CSS dosyasını içe aktarın

function PizzaInfo({ title, price, rating, reviews, description }) {
    return (
        <div className="pizza-info"> 
            <h3>{title}</h3>
            <div className="priceAndPoint">
                <h2>{price} TL</h2>
                <p>{rating}</p>
                <p>({reviews})</p>
            </div>
            <div className="description">
                {description}
            </div>
        </div>
    );
}

export default PizzaInfo;
