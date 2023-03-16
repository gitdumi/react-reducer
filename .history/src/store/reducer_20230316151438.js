export default function tasksReducer(tasks, action) {
    const {type, payload} = action
    switch (type) {
      case 'added': {
        return [...tasks, {
          id: payload.id,
          text: action.text,
          done: false
        }];
      }
      case 'changed': {
        return tasks.map(t => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return tasks.filter(t => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }