export default function lang(state = '', action) {
    switch (action.type) {
    case 'SET_LANG':
        return state = action.lang
      default:
        return state
    }
  }