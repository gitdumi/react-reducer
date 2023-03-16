import tasksReducer from "./reducer"

const AppContext = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
}