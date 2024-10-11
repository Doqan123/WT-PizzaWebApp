import { Link } from 'react-router-dom';
import styles from '../styles/Breadcrumbs.module.css'; // Stil dosyasını buraya ekleyin

function Breadcrumbs({ paths }) {
    return (
        <nav className={styles.breadcrumbs}>
            {paths.map((path, index) => (
                <span key={index}>
                    <Link to={path.url}>{path.name}</Link>
                    {index < paths.length - 1 && ' > '}
                </span>
            ))}
        </nav>
    );
}

export default Breadcrumbs;
