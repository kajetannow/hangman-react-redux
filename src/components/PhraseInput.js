import React from 'react';
import { useSelector } from 'react-redux';

export default function PhraseInput(){
    const phrase = useSelector(state => state.phrase);
    return(
        <div className="phrase-input">
            <h1>{phrase}</h1>
        </div>
    )
} 