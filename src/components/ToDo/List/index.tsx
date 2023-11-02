import { ClipboardText } from 'phosphor-react';
import styles from './styles.module.css';

export function List() {
  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <div className={styles.toDoCreatedWrapper}>
          <span className={styles.labelToDoCreated}>Tarefas Criadas</span>
          <span className={styles.toDoCreatedContent}>0</span>
        </div>
        <div className={styles.toDoCompletedWrapper}>
          <span className={styles.labelTodoCompleted}>Tarefas Criadas</span>
          <span className={styles.toDoCompletedContent}>0</span>
        </div>
      </div>
      <div className={styles.content}>
      <div className={styles.notContent}>
        <ClipboardText size={56} />
        <div className={styles.notContentTextWrapper}>
          <span className={styles.notContentTitle}>Você ainda não tem tarefas cadastradas</span>
          <span className={styles.notContentText}>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>
      </div>
    </div>
  );
}