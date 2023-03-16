export const Actions = {
    ADD: 'add',
    CHANGE: 'change',
    DELETE: 'delete'
}
Object.freeze(Actions)


export default function tasksReducer(tasks, action) {
  const { type, payload } = action;
  
  switch (type) {
    case Actions.ADD: {
      return [
        ...tasks,
        {
          id: payload.id,
          text: payload.text,
          done: false,
        },
      ];
    }
    case Actions.CHANGE: {
      return tasks.map((t) => {
        if (t.id === payload.id) {
          return payload;
        } else {
          return t;
        }
      });
    }
    case Actions.DELETE: {
      return tasks.filter((t) => t.id !== payload.id);
    }
    default: {
      throw Error("Unknown action: " + type);
    }
  }
}
