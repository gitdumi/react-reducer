import { useState } from "react";
import { useTasksContext } from "../store/AppContext";
import { Actions } from "../store/reducer";

export default function AddTask() {
  const [text, setText] = useState("");
  const { dispatch, nextId } = useTasksContext();

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: Actions.ADD,
            payload: { id: nextId + 1, text: text },
          });
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
