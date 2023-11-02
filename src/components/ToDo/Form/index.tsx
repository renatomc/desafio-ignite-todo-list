import { ChangeEvent, Dispatch, FormHTMLAttributes, InvalidEvent, SetStateAction } from 'react';

import { Input } from '../../Form/Input';
import { Button } from '../../Form/Button';

import styles from './styles.module.css';
import { PlusCircle } from 'phosphor-react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
}

export function Form({todo, setTodo, ...rest}: FormProps) {

  function handleInputTodo(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setTodo(event?.target.value);
  }

  function onInvalidInput(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Favor preencher este campo!');
  }

  const isInvalidForm = todo.length === 0;

  return (
    <div className={styles.toDoForm}>
      <form {...rest}>
        <Input placeholder='Selecione uma nova tarefa' value={todo} onChange={handleInputTodo} required onInvalid={onInvalidInput} />
        <Button type='submit' disabled={isInvalidForm}>Criar<PlusCircle size={16} /></Button>
      </form>
    </div>
  );
}