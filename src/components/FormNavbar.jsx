import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../styles/FormNavbar.module.css'; 
import Logo from '/Assets/Iteration-1-assets/logo.svg';

function FormNavbar() {
    return (
        <div className={`${styles['form-navbar']} ${styles.container}`}> 
            <div>
                <Link to="/">
                    <img className={styles.logo} src={Logo} alt="logo" /> 
                </Link>
            </div>
            {/* altaki div i konumlandırma için düşündüm ama style vermedim. belki gereksizdir üzerine bir daha düşünmeliyim */}
            <div className={styles.navContainer}>
                <Link to="/">Anasayfaya </Link>
                <h3>Sipariş Oluştur</h3>
            </div>
        </div>
    );
}

export default FormNavbar;
