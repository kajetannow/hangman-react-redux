import React from 'react';
import { useSelector } from 'react-redux';
import AgainButton from './AgainButton';

export default function Defeat(){
    const phrase = useSelector(state => state.phrase);

    return(
        <div className="end-screen defeat">
        <h1>Defeat!</h1>
        <p>Sorry, you lose!</p>
        <p>Phrase was:</p>
        <h2>{phrase}</h2>

        <AgainButton />

        </div>
    )
}