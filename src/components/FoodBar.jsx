import React from 'react';
import '../styles/FoodBar.css';

function FoodBar() {
  return (
    <section className="food-bar">
      <div className="container">
        <a href="#" className="food-item">
          <img src="./Assets/Iteration-2-aseets/icons/1.svg" alt="Kore" />
          <span>YENİ! Kore</span>
        </a>
        <a href="#" className="food-item">
          <img src="./Assets/Iteration-2-aseets/icons/2.svg" alt="Pizza" />
          <span>Pizza</span>
        </a>
        <a href="#" className="food-item">
          <img src="./Assets/Iteration-2-aseets/icons/3.svg" alt="Burger" />
          <span>Burger</span>
        </a>
        <a href="#" className="food-item">
          <img src="./Assets/Iteration-2-aseets/icons/4.svg" alt="Kızartmalar" />
          <span>Kızartmalar</span>
        </a>
        <a href="#" className="food-item">
          <img src="./Assets/Iteration-2-aseets/icons/5.svg" alt="Fast Food" />
          <span>Fast Food</span>
        </a>
        <a href="#" className="food-item">
          <img src="./Assets/Iteration-2-aseets/icons/6.svg" alt="Gazlı İçecek" />
          <span>Gazlı İçecek</span>
        </a>
      </div>
    </section>
  );
}

export default FoodBar;
