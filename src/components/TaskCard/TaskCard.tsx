import styles from './TaskCard.module.scss'
import { useSpring, animated } from '@react-spring/web'

// import { useTaskStore } from '../utils/taskStore'
import { useTestStore } from '../../utils/taskStore'

export interface Task {
  taskId: number;
  taskName: string;
  streak: number;
  maxStreak: number;
  dates: { [key: number]: { [key: number]: number[] } };
  started: string;
  inStreak: boolean;
}

export interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }:TaskCardProps) => {
  const { taskId, taskName, inStreak, streak } = task;


  const addStreak = useTestStore((state) => state.addStreak);
  const removeStreak = useTestStore((state) => state.removeStreak);

  // const { addStreak, removeStreak } = useTaskStore((state) => ({
  //   addStreak: state.addStreak,
  //   removeStreak: state.removeStreak
  // }));


  // animation
  const animation = useSpring({
    width: inStreak ? '100%' : '7%',
    from: { width: inStreak ? '7%' : '100%' },
  });

  const handleClick = () => {
    if (inStreak) {
      removeStreak(taskId)
    } else {
      addStreak(taskId)
    }
  };

  return (
    <div className={styles.taskCard}>
      <div className={styles.cardTop}>
        <div className={styles.taskName}>{taskName}</div>
        <div className={styles.taskStreak} onClick={handleClick} role="button">
          {streak}
        </div>
      </div>
      <div className={styles.progressBar}>
        <animated.div className={styles.barFluid} style={animation} />
      </div>
    </div>
  );
};

export default TaskCard;
