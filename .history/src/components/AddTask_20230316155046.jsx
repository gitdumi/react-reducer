import { useState } from "react";
import { useTasksContext } from "../store/AppContext";

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
          dispatch(payload: { id: nextId + 1, text: text });
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
