import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';
import { PlusCircle } from 'phosphor-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({children, ...rest}: ButtonProps) {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.button} {...rest}>{children} <PlusCircle size={16} /></button>
    </div>
  );
}