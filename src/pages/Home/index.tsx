import { Header } from '../../components/Header';
import { ToDo } from '../../components/ToDo';
import styles from './styles.module.css';

export function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.homeContainer}>
        <ToDo />
      </div>
    </div>
  )
}