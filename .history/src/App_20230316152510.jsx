import './App.css'
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { useAppContext } from './store/AppContext';

function App() {
  const {tasks,dispatch, nextId} = useAppContext()

  return (
    <>
      <h1>Todos</h1>
      <AddTask/>
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App
