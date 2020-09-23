import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function AgainButton(){
    const dispatch = useDispatch();
    return(
            <Link to ="/" onClick={
                ()=>dispatch({type: "CLEAR_STORE"})
            }>
               <button className="again-btn">Play again</button>
            </Link>
    )
}