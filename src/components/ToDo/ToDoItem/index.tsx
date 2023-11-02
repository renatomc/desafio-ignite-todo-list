import { Trash } from 'phosphor-react';
import { ToDoItemData } from '../../../types/ToDoItem';

import styles from './styles.module.css';
import { FakeCheckBox } from '../../Form/FakeCheckBox';

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
    <div className={styles.toDoItem}>
      <div className={styles.itemWrapper} onClick={() => handleCompleteItem(item.id!)}>
        <FakeCheckBox isChecked={item.isComplete} />
        <span className={item.isComplete ? styles.descriptionIsComplete : styles.description}>
          {item.description}
        </span>
      </div>
      <button onClick={() => handleDeleteItem(item.id!)}>
        <Trash size={22} />
      </button>
    </div>
  )
}