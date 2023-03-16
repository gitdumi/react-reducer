import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TasksProvider, { useTasksContext } from "./store/AppContext";

function App() {
  return (
    <TasksProvider>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

export default App;
