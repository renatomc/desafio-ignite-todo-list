import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Form } from './Form';
import { List } from './List';
import { ToDoItemData } from '../../types/ToDoItem';

import styles from './styles.module.css';

export function ToDo() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<ToDoItemData[]>([]);

  console.log({todoList});

  function handleSubmit() {
    const newTodoList:ToDoItemData = {
      id: uuidv4(),
      description: todo,
      isComplete: false,
    };

    setTodoList([...todoList, newTodoList]);
    setTodo('');
  }

  function onDeleteItem(id: string) {
    const todoListWithOutDeleteItem = todoList.filter(todoItem => todoItem.id !== id);
    setTodoList([...todoListWithOutDeleteItem]);
  }

  function onCompleteItem(id: string) {
    const todoListWithCompleteNewItem = todoList.map(todoItem => {
      if(todoItem.id === id) {
        return {
          ...todoItem,
          isComplete: true
        }
      }
      return todoItem;
    });
    setTodoList([...todoListWithCompleteNewItem]);
  }

  return (
    <div className={styles.todo}>
      <Form onSubmit={handleSubmit} todo={todo} setTodo={setTodo}  />
      <List 
        toDoList={todoList}
        onCompleteItem={onCompleteItem}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}