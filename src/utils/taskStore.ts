import { create } from 'zustand'
import testdata from '../data/testdata';
import { Task } from '../components/TaskCard/TaskCard';
// import { getSocket } from './socket';

interface TaskStore {
  tasks: Task[];
  init: () => void;
  addStreak: (taskId: number) => void;
  removeStreak: (taskId: number) => void;
  newTask: (name: string) => void;
  removeTask: (taskId: number) => void;
}

export const useTestStore = create<TaskStore>((set) => ({
  tasks: JSON.parse(JSON.stringify(testdata)),
  init: () => { },

  addStreak: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.taskId === taskId
          ? { ...task, streak: task.streak + 1, inStreak: true }
          : task
      )
    })),

  removeStreak: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.taskId === taskId
          ? { ...task, streak: Math.max(0, task.streak - 1), inStreak: false }
          : task
      )
    })),

  newTask: (taskName) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          taskId: Date.now(),
          taskName,
          streak: 0,
          maxStreak: 0,
          started: new Date().toISOString(),
          inStreak: false,
          dates: {}
        }
      ]
    })),

  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.taskId !== taskId)
    }))
}));

// export const useTaskStore = create<TaskStore>((set) => {
//   const socket = getSocket();

//   socket.onmessage = (event) => { set({ tasks: JSON.parse(event.data) }) };

//   const init = () => {
//     if (socket.readyState === WebSocket.OPEN) {
//       socket.send(JSON.stringify({ action: 'getAll' }));
//     } else {
//       socket.onopen = () => {
//         socket.send(JSON.stringify({ action: 'getAll' }));
//       };
//     }
//   };

//   const addStreak = (taskId: number) => socket.send(JSON.stringify({ action: 'addStreak', taskId }));
//   const removeStreak = (taskId: number) => socket.send(JSON.stringify({ action: 'removeStreak', taskId }));
//   const newTask = (taskName: string) => socket.send(JSON.stringify({ action: 'newTask', taskName }));
//   const removeTask = (taskId: number) => socket.send(JSON.stringify({ action: 'removeTask', taskId }));

//   return { tasks: [], init, addStreak, removeStreak, newTask, removeTask };
// });
