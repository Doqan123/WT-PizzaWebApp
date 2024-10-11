import '../styles/PizzaInfo.css'; 

function PizzaInfo({ title, price, rating, reviews, description }) {
    return (
        <div className="pizza-info"> 
            <h3>{title}</h3>
            <div className="priceAndPoint">
                <h2>{price}0₺</h2>
                <div className='ratingInfo'>
                <p></p>
                <p></p>
                <span>{rating}</span>
                <span>({reviews})</span>
                </div>
   
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default PizzaInfo;
