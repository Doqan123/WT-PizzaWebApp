import React from 'react';
import '../styles/MainSection.css'; // CSS dosyanızın adı

const MainSection = () => {
  return (
    <div>
      {/* Kart bölümü */}
      <section className="card-section">
        <div className="card-items container">
          <div className="left-items">
            <div className="card-1">
              <h2>Özel <br />Lezzetus</h2>
              <p>Position: Absolute Acı Burger</p>
              <button>SİPARİŞ VER</button>
            </div>
          </div>
          <div className="right-items">
            <div className="card-2">
              <h3>Hackathon <br />Burger Menü</h3>
              <button>SİPARİŞ VER</button>
            </div>
            <div className="card-3">
              <h3 style={{ color: 'black' }}>
                <span style={{ color: '#CE2829' }}>Çooook</span> hızlı <br />npm gibi kurye
              </h3>
              <button>SİPARİŞ VER</button>
            </div>
          </div>
        </div>
      </section>

      {/* Ara bölüm */}
      <section className="slogan-section">
        <div className="container">
          <p>en çok paketlenen menüler</p>
          <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
        </div>
      </section>

      {/* FOOD-BAR-2 */}
      <section className="food-bar-2">
        <div className="container">
          <a href="#" className="food-item">
            <img src="./Assets/Iteration-2-aseets/icons/1.svg" alt="Kore" />
            <span>Ramen</span>
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
            <span>French fries</span>
          </a>
          <a href="#" className="food-item">
            <img src="./Assets/Iteration-2-aseets/icons/5.svg" alt="Fast Food" />
            <span>Fast Food</span>
          </a>
          <a href="#" className="food-item">
            <img src="./Assets/Iteration-2-aseets/icons/6.svg" alt="Gazlı İçecek" />
            <span>Soft drinks</span>
          </a>
        </div>
      </section>

      {/* MENU-CARD-SECTION */}
      <section className="menu-card">
        <div className="container">
          <div className="menu-box">
            <img src="./Assets/Iteration-2-aseets/pictures/food-1.png" alt="food-1" />
            <h5>Terminal Pizza</h5>
            <span className="left-span">4.9</span>
            <span style={{ fontWeight: 'bold' }} className="right-span">60₺</span>
            <span className="right-span">(200)</span>
          </div>
          <div className="menu-box">
            <img src="./Assets/Iteration-2-aseets/pictures/food-2.png" alt="food-2" />
            <h5>Terminal Pizza</h5>
            <span className="left-span">4.9</span>
            <span style={{ fontWeight: 'bold' }} className="right-span">60₺</span>
            <span className="right-span">(200)</span>
          </div>
          <div className="menu-box">
            <img src="./Assets/Iteration-2-aseets/pictures/food-3.png" alt="food-3" />
            <h5>Terminal Pizza</h5>
            <span className="left-span">4.9</span>
            <span style={{ fontWeight: 'bold' }} className="right-span">60₺</span>
            <span className="right-span">(200)</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSection;
