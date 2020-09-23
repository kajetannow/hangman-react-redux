import { loseLifePoint, removeGuessedChar } from './redux/actions'


export function checkPhrase(phrase, char){
    let foundChar = phrase.indexOf(char);

    if(foundChar<0)
        return loseLifePoint();
    else
        return removeGuessedChar(foundChar);
}