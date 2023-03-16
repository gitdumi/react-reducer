export const Actions {
    ADD= 'add'
    CHANGE= 'change',
    DELETE= 'delete'
}

export default function tasksReducer(tasks, action) {
  const { type, payload } = action;
  
  switch (type) {
    case "added": {
      return [
        ...tasks,
        {
          id: payload.id,
          text: payload.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === payload.id) {
          return payload;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== payload.id);
    }
    default: {
      throw Error("Unknown action: " + type);
    }
  }
}
