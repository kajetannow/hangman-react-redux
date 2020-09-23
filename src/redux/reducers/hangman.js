import { defaultLifePoints } from "../../config"


export default function hangman(state = {}, action) {
    switch (action.type) {
    case "START_GAME":
        return Object.assign({}, state, {
          guessed: action.phrase.split(""),
          lifePoints: defaultLifePoints,
          unguessedPoints: action.phrase.length 
        })
    case 'LOSE_LIFE_POINT':
        return Object.assign({}, state, {
          lifePoints: state.lifePoints - 1
        })
        
    case "REMOVE_GUESSED_CHAR":
        return Object.assign({}, state, {
          guessed: [
            ...state.guessed.slice(0, action.charID),
            undefined,
            ...state.guessed.slice(action.charID+1, state.guessed.length)
          ],
          unguessedPoints: state.unguessedPoints - 1
        })
      default:
        return state
    }
  }