import { useState } from 'react'
import styles from './HomePage.module.scss'
import Tasklist from '../../components/TaskList/Tasklist'
import MenuBar from '../../components/MenuBar/MenuBar'

export interface DateObject {
  month?: number;
  monthString?: string;
  day?: number;
  year?: number;
}

function getDate(): DateObject {
  const today: Partial<DateObject> = {};
  const now = new Date(Date.now());
  today.month = now.getMonth() + 1;
  today.monthString = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(now);
  today.day = now.getDate();
  today.year = now.getFullYear();
  return today;
}

function formatDate(date: DateObject): string {
  return `${date.monthString} ${date.day}\n ${date.year}`;
}

const App = () => {
  const [date] = useState(getDate());

  return (
    <>
      <div className={styles.dateHeader}>{formatDate(date)}</div>
      <div className={styles.titleMessage}>How&apos;s Progress?</div>
      <Tasklist />
      <MenuBar />
    </>
  );
};

export default App;
