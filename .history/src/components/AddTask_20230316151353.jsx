import { useState } from 'react';
import { useAppContext } from '../store/AppContext';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  const {dispatch} = useAppContext()

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch({...task);
      }}>Add</button>
    </>
  )
}
