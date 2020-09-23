import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


export default function TyperControlPanel(props){
    const dispatch = useDispatch();
    const phrase = useSelector(state => state.phrase)
    
    return(
        <div className="keyboard typer-control-panel">
        <button className="keyboard-btn backspace-btn" onClick={()=>{
            dispatch({type: "REMOVE_LAST_CHAR"});
        }}>
            &lt;-
        </button>
        {
        /*
        <button className="keyboard-btn space-btn" onClick={()=>{
            dispatch({type: "ADD_CHAR", char: " "});
        }}>
        </button>
        */
        }
        <Link className="" to="/guessing" onClick={()=>{
            dispatch({type: "START_GAME", phrase: phrase})
        }}>
                <button className="keyboard-btn accept-btn">accept</button>
            </Link>
            
        </div>
    )}