import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useAppContext, AppContext } from "./store/AppContext";

function App() {
  const { tasks, dispatch, nextId } = useAppContext();

  return (
    <AppTaContext>
      <h1>Todos</h1>
      <AddTask />
      <TaskList />
    </AppTaContext>
  );
}

export default App;
