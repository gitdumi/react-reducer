import { useState, useContext } from "react";
import { useAppContext } from "../store/AppContext";

export default function TaskList() {
  const { tasks } = useAppContext();
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
  const { dispatch } = useAppContext();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch("changed", {
              {
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
            task: {
              ...task,
              done: e.target.checked,
            },
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
