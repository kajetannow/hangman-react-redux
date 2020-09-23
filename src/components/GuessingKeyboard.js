import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { keyboards } from '../config';
import { checkPhrase } from '../functions';


export default function GuessingKeyboard(){
    const lang = useSelector(state => state.lang);
    const guessed = useSelector(state => state.hangman.guessed);
    const keyboard = lang ? keyboards[lang] : keyboards['en'];


    const dispatch = useDispatch();

    return(
        <div className="keyboard">
        
        {keyboard.map((key,i)=>
        <button key={i} className="keyboard-btn" onClick={()=>{
            
            dispatch(checkPhrase(guessed, key));

        }}>
            {key}
        </button>
        )}

        </div>
    )
} 