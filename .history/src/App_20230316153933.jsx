import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TasksProvider, { useAppContext, AppContext } from "./store/AppContext";

function App() {
  const { tasks, dispatch, nextId } = useAppContext();

  return (
    <TasksProvider>
      <h1>Todos</h1>
      <AddTask />
      <TaskList />
    </Tasks>
  );
}

export default App;
