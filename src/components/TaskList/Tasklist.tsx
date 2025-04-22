import styles from './Tasklist.module.scss'
import TaskCard from '../TaskCard/TaskCard';

// import { useTaskStore } from '../utils/taskStore'
import { useTestStore } from '../../utils/taskStore'

const Tasklist = () => {
  // const tasks = useTaskStore((state) => state.tasks)
  const tasks = useTestStore((state) => state.tasks)
  
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <TaskCard key={task.taskId} task={task} />
      ))}
    </div>
  );
};

export default Tasklist;
