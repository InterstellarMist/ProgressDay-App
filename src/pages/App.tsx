// import { useEffect } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router';
import TitlePage from './TitlePage/TitlePage';
import HomePage from './HomePage/HomePage';
// import { useTaskStore } from '../utils/taskStore'


const App = () => {
  // Initialize Websocket and TaskStore
  // const init = useTaskStore((s) => s.init);

  // useEffect(() => {
  //   init();
  // }, [init]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TitlePage />} />
        <Route path="tasks" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
