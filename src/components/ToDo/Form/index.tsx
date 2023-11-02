import { FormHTMLAttributes } from 'react';

import { Input } from '../../Form/Input';
import { Button } from '../../Form/Button';

import styles from './styles.module.css';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export function Form({...rest}: FormProps) {
  return (
    <div className={styles.toDoForm}>
      <form {...rest}>
        <Input placeholder='Selecione uma nova tarefa' />
        <Button type='submit'>Criar</Button>
      </form>
    </div>
  );
}