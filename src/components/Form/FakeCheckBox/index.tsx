import { Check } from 'phosphor-react';
import styles from './styles.module.css';

type FakeCheckBoxProps = {
  isChecked: boolean;
}

export function FakeCheckBox({ isChecked }: FakeCheckBoxProps) {
  return (
    <div className={isChecked ? styles.fakeCheckBoxIsCheck : styles.fakeCheckBox}>
      {isChecked && (
        <Check />
      )}
    </div>
  );
}