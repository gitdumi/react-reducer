import {
  createContext,
  useContext,
  useReducer,
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
const NextIdContext = createContext(nextId);

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export function useTasksContext() {
  const tasks = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);
  const nextId = useContext(NextIdContext);

  return { tasks, dispatch, nextId };
}

export default TasksProvider;
