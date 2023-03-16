import { useReducer } from "react";
import tasksReducer from "./reducer";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];



const AppContext = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return <AppContext.Provider>{children}</AppContext.Provider>;
};
