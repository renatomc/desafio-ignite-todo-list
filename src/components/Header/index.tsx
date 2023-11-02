import styles from './styles.module.css';
import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Logo Todo" />
    </div>
  );
}