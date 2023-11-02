import { ToDoItemData } from '../../../types/ToDoItem';

import styles from './styles.module.css';

type ToDoItemProps = {
  item: ToDoItemData;
  onDeleteItem: (id: string) => void;
  onCompleteItem: (id: string) => void;
}

export function ToDoItem({ item, onCompleteItem, onDeleteItem }: ToDoItemProps) {

  function handleCompleteItem(id: string) {
    onCompleteItem(id);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleDeleteItem(id: string) {
    onDeleteItem(id);
  }

  return (
    <div className={styles.toDoItem} onClick={() => handleCompleteItem(item.id!)}>
      {item.description}
    </div>
  )
}