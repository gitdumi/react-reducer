import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useAppContext, AppContext } from "./store/AppContext";

function App() {
  const { tasks, dispatch, nextId } = useAppContext();

  return (
    <AppContext>
      <h1>Todos</h1>
      <AddTask />
      <TaskList />
    </AppContext>
  );
}

export default App;
