import { ClipboardText } from 'phosphor-react';
import styles from './styles.module.css';
import { ToDoItemData } from '../../../types/ToDoItem';
import { useMemo } from 'react';

type ListProps = {
  toDoList: ToDoItemData[];
}

export function List({ toDoList }: ListProps) {

  const todoCreated = useMemo(() => {
    return toDoList.length;
  },[toDoList])

  const todoCompleted = useMemo(() => {
    return toDoList.reduce((act, todo) => {
      if(todo.isComplete) {
        return act + 1;
      }
      return act;
    }, 0);
  },[toDoList])

  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <div className={styles.toDoCreatedWrapper}>
          <span className={styles.labelToDoCreated}>Tarefas Criadas</span>
          <span className={styles.toDoCreatedContent}>{todoCreated}</span>
        </div>
        <div className={styles.toDoCompletedWrapper}>
          <span className={styles.labelTodoCompleted}>Concluídas</span>
          <span className={styles.toDoCompletedContent}>{todoCompleted}</span>
        </div>
      </div>
      <div className={styles.content}>
        {toDoList?.length > 0 && toDoList.map(toDo => (
            <div key={toDo.id}>
              <p>{toDo.description}</p>
            </div>
        ))}
        {toDoList?.length === 0 && (
          <div className={styles.notContent}>
            <ClipboardText size={56} />
            <div className={styles.notContentTextWrapper}>
              <span className={styles.notContentTitle}>Você ainda não tem tarefas cadastradas</span>
              <span className={styles.notContentText}>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}