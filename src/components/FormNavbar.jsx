import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../styles/FormNavbar.module.css'; 
import Logo from '/Assets/Iteration-1-assets/logo.svg';
import Breadcrumbs from './Breadcrumbs'; // Breadcrumbs bileşenini ekleyin

function FormNavbar() {
    const breadcrumbs = [
        { name: 'Anasayfa', url: '/' },
        { name: 'Sipariş Oluştur', url: '/order' }, 
    ];

    return (
        <div className={`${styles['form-navbar']} ${styles.container}`}> 
            <div>
                <Link to="/">
                    <img className={styles.logo} src={Logo} alt="logo" /> 
                </Link>
            </div>
            <Breadcrumbs paths={breadcrumbs} /> 
            
        </div>
    );
}

export default FormNavbar;
