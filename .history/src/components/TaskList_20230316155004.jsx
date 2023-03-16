import { useState } from "react";
import { useTasksContext } from "../store/AppContext";

export default function TaskList() {
  const { tasks, dispatch } = useTasksContext();

  console.log(tasks, dispatch);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const { dispatch } = useTasksContext();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              payload: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch("changed", {
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch("deleted", {
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
