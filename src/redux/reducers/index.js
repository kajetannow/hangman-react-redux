import { combineReducers } from 'redux';
import lang from './lang';
import phrase from './phrase';
import hangman from './hangman';


const appReducer = combineReducers({
    lang,
    phrase,
    hangman
  })
  
const rootReducer = (state, action) => {
    if (action.type === 'CLEAR_STORE') {
      state = undefined
    }
  
    return appReducer(state, action)
  }

  export default rootReducer