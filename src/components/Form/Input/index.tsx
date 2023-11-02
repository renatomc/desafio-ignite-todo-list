import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({...rest}: InputProps) {
  return(
    <div className={styles.inputWrapper}>
      <input className={styles.input} {...rest} />
    </div>
  );
}