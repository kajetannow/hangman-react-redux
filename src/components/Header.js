import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header(){
    const lang = useSelector(state => state.lang)
    const dispatch = useDispatch();
    return(
        <header>
            {lang ? <h4>Selected language: <b>{lang}</b></h4> : <h4> </h4>}
            <h1><Link to ="/" onClick={
                ()=>dispatch({type: "CLEAR_STORE"})
            }>Hangman</Link></h1>
        </header>
    )
} 