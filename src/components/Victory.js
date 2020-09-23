import React from 'react';
import AgainButton from './AgainButton';

export default function Victory(){
    return(
        <div className="end-screen victory">
        <h1>Victory!</h1>
        <p>Congrats, you won!</p>
        <AgainButton />
        </div>
    )
}