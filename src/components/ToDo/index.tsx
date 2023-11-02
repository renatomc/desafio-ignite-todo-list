import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Form } from './Form';
import { List } from './List';
import { ToDoItemData } from '../../types/ToDoItem';

import styles from './styles.module.css';

export function ToDo() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<ToDoItemData[]>([]);

  function handleSubmit() {

    const newTodoList:ToDoItemData = {
      id: uuidv4(),
      description: todo,
      isComplete: true,
    };

    setTodoList([...todoList, newTodoList]);
    setTodo('');
  }

  console.log({todoList});

  return (
    <div className={styles.todo}>
      <Form onSubmit={handleSubmit} todo={todo} setTodo={setTodo}  />
      <List toDoList={todoList} />
    </div>
  );
}