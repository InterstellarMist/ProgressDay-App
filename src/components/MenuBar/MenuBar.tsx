import styles from './MenuBar.module.scss';
import { clsx } from 'clsx';

// import { useTaskStore } from '../utils/taskStore'
import { useTestStore } from '../../utils/taskStore'

import add from '../../assets/Add.svg';
import menuBar from '../../assets/Menu Bar.svg';
import home from '../../assets/Home.svg';
import calendar from '../../assets/Calendar.svg';
import achievements from '../../assets/Achievements.svg';
import settings from '../../assets/Settings.svg';

const selected = true;

const MenuBar = () => {
  const newTask = useTestStore((state) => state.newTask);

  return (
    <div className={styles.menuBarDiv}>
      <div className={styles.addButton} onClick={() => newTask('New Task')}>
        <img src={add} alt="Add button" width="50px" />
      </div>
      <div className={styles.menuBarContainer}>
        <img src={menuBar} width="400px" alt="Menu Bar" />
        <div className={styles.lowerBar}>
          <div className={clsx(styles.menuIconDiv, selected && styles.selected)}>
            <img className={styles.menuIcon} src={home} alt="" />
          </div>
          <div className={styles.menuIconDiv}>
            <img className={styles.menuIcon} src={calendar} alt="" />
          </div>
          <div className={styles.menuIconDiv}>
            <img className={styles.menuIcon} src={calendar} style={{ opacity: 0 }} alt="" />
          </div>
          <div className={styles.menuIconDiv}>
            <img className={styles.menuIcon} src={achievements} alt="" />
          </div>
          <div className={styles.menuIconDiv}>
            <img className={styles.menuIcon} src={settings} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
