import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import React from "react";
import tasksReducer from "./reducer";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

const TasksContext = createContext(initialTasks);
const TasksDispatchContext = createContext(null);

export const useAppContext = () => {
  const tasks = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);
  const [nextId, setNextId] = useState(tasks.length);

  useEffect(() => {
    setNextId(tasks.length);
  }, [tasks.length]);

  return { tasks, dispatch, nextId };
};

const AppContext = ({ children }) => {
  const tasks = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default AppContext;
