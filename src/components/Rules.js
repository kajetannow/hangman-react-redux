import React from 'react';

export default function Rules(props){
    return(
        <div className="rules">
        <h2>Rules</h2>
        <ul>
            <li>Only one word phrases are allowed, although support of multiple words will be added in future</li>
            <li>When you guess an letter, game shows its only first unguessed occurence in phrase</li>
        </ul>
        
        </div>
    )
} 