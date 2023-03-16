import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TasksProvider, { useTasksContext } from "./store/AppContext";

function App() {
  const { tasks, dispatch, nextId } = useTasksContext();

  return (
    <TasksProvider>
      <h1>Todos</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

export default App;
