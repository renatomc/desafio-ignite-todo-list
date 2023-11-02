import { Form } from './Form';
import styles from './styles.module.css';

export function ToDo() {
  return (
    <div className={styles.todo}>
      <Form />
    </div>
  );
}