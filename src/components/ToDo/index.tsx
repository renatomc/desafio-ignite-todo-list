import { useState } from 'react';
import { Form } from './Form';
import styles from './styles.module.css';

export function ToDo() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState(['']);

  function handleSubmit() {
    setTodoList([...todoList, todo]);
    setTodo('');
  }

  console.log({todoList});
  
  return (
    <div className={styles.todo}>
      <Form onSubmit={handleSubmit} todo={todo} setTodo={setTodo}  />
    </div>
  );
}