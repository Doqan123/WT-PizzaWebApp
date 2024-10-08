import styles from '../styles/Hero.module.css'; 
import Logo from '/Assets/Iteration-1-assets/logo.svg';
import Button from './Button';

function Hero() {
    return (
        <section className={styles['hero-section']}>
            <div className={`container ${styles['hero-content']}`}>

                <img className={styles.logo} src={Logo} alt="logo" />
                <p>fırsatı kaçırma</p>
                <h1>KOD ACIKTIRIR <br /> PIZZA, DOYURUR</h1>
                <Button label="ACIKTIM" to="/order" />
            </div>
        </section>
    );
}

export default Hero;
