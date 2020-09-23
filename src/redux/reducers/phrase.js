export default function phrase(state = "", action) {
    switch (action.type) {
    case 'ADD_CHAR':
        return state + action.char;
    case 'REMOVE_LAST_CHAR':
        return state.slice(0,-1);
      default:
        return state
    }
  }