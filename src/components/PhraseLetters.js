import React from 'react';
import { useSelector } from 'react-redux';

export default function PhraseLetters(){
    const guessed = useSelector(state => state.hangman.guessed);
    const phrase = useSelector(state => state.phrase);

    return(
        <div className="phrase-letters">
            {guessed ? guessed.map((char,i)=>
                <div key={i} className="phrase-char"><h1>{!char ? phrase[i]: "-"}</h1></div>
            ) : ""} 
        </div>
    )
} 