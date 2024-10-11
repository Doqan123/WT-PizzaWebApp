import React from 'react';
import '../styles/Footer.css'; // Footer stil dosyanızı buraya ekleyin


function Footer() {
  return (
    <footer>
      <div className="container">
        {/* Left Footer */}
        <div className="left-footer">
          <div className="logo-footer">
            <img src="./Assets/Iteration-2-aseets/footer/logo-footer.svg" alt="logo-footer" />
          </div>
          <div className="address">
            <img src="./Assets/Iteration-2-aseets/footer/icons/icon-1.png" alt="Icon" width="32" height="32" />
            <span>341 Londonderry Road, Istanbul Türkiye</span>
          </div>
          <div className="mail">
            <img src="./Assets/Iteration-2-aseets/footer/icons/icon-2.png" alt="Icon" width="32" height="32" />
            <span>aciktim@teknolojikyemekler.com</span>
          </div>
          <div className="phone">
            <img src="./Assets/Iteration-2-aseets/footer/icons/icon-3.png" alt="Icon" width="32" height="32" />
            <span>+90 216 123 45 67</span>
          </div>
        </div>

        {/* Middle Footer */}
        <div className="middle-footer">
          <div className="foods">
            <h3>Hot Menu</h3>
            <span>Terminal Pizza</span>
            <span>5 Kişilik Hackathlon Pizza</span>
            <span>useEffect Tavuklu Pizza</span>
            <span>Beyaz Console Frosty</span>
            <span>Testler Geçti Mutlu Burger</span>
            <span>Position Absolute Acı Burger</span>
          </div>
        </div>

        {/* Right Footer */}
        <div className="photo-section">
          <h2>Instagram</h2>
          <div className="food-photo">
            <img src="./Assets/Iteration-2-aseets/footer/insta/li-0.png" alt="Image " />
            <img src="./Assets/Iteration-2-aseets/footer/insta/li-1.png" alt="Image " />
            <img src="./Assets/Iteration-2-aseets/footer/insta/li-2.png" alt="Image " />
            <img src="./Assets/Iteration-2-aseets/footer/insta/li-3.png" alt="Image " />
            <img src="./Assets/Iteration-2-aseets/footer/insta/li-4.png" alt="Image " />
            <img src="./Assets/Iteration-2-aseets/footer/insta/li-5.png" alt="Image " />
          </div>
        </div>
      </div>

      <div className="last">
        <span>© 2023 Teknolojik Yemekler.</span>
      </div>
    </footer>
  );
}

export default Footer;
