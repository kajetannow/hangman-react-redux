import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { keyboards } from './../config';


export default function Keyboard(props){
    const lang = useSelector(state => state.lang)
    const keyboard = lang ? keyboards[lang] : keyboards['en'];

    const dispatch = useDispatch();

    return(
        <div className="keyboard">
        
        {keyboard.map((key,i)=>
        <button key={i} className="keyboard-btn" onClick={()=>{
            dispatch({type: `ADD_CHAR`, char: key});
        }}>
            {key}
        </button>
        )}
        

        </div>
    )
} 