
//LANG
export const SET_LANG = "SET_LANG";

export function setLang(lang) {
    return {
        type: SET_LANG,
        lang: lang
    }
}



//########################
export function loseLifePoint() {
    return {
        type: "LOSE_LIFE_POINT",
    }
}

export function removeGuessedChar(charID) {
    return {
        type: "REMOVE_GUESSED_CHAR",
        charID: charID
    }
}
