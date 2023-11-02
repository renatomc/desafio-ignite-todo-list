import { ChangeEvent, Dispatch, FormHTMLAttributes, SetStateAction } from 'react';

import { Input } from '../../Form/Input';
import { Button } from '../../Form/Button';

import styles from './styles.module.css';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
}

export function Form({todo, setTodo, ...rest}: FormProps) {

  function handleInputTodo(event: ChangeEvent<HTMLInputElement>) {
    setTodo(event?.target.value);
  }
  
  return (
    <div className={styles.toDoForm}>
      <form {...rest}>
        <Input placeholder='Selecione uma nova tarefa' value={todo} onChange={handleInputTodo} />
        <Button type='submit'>Criar</Button>
      </form>
    </div>
  );
}