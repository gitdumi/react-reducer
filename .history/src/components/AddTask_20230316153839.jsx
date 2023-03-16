import { useState } from "react";
import { useAppContext } from "../store/AppContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const { dispatch, nextId } = useAppContext();

  console.log({dispatch});

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch("added", { id: nextId + 1, text: text });
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
