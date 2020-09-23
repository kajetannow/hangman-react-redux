import React from 'react';
import { useSelector } from 'react-redux';


export default function Hangman(props){
    const lifePoints = useSelector(state => state.hangman.lifePoints)

    return(
        <div className="hangman">
        <svg id="hangman-graphic" data-name="hangman-graphic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 830 830">
  
  <title>hangman</title>
  {lifePoints < 10 ? <line className="hangman-stroke" y1="822.5" x2="820" y2="822.5"/> : ""}
  {lifePoints < 9 ? <line className="hangman-stroke" x1="820" y1="822" x2="820" y2="2"/> : ""}
  {lifePoints < 8 ? <line className="hangman-stroke" x1="410" y1="2.5" x2="820.5" y2="2.5"/> : ""}
  {lifePoints < 7 ? <line className="hangman-stroke" x1="410.25" y1="225.5" x2="410.25" y2="2.25"/> : ""}
  {lifePoints < 6 ? <circle className="hangman-stroke" cx="410" cy="278.5" r="53"/> : ""}
  {lifePoints < 5 ? <line className="hangman-stroke" x1="410" y1="332" x2="410" y2="465.5"/> : ""}
  {lifePoints < 4 ? <line className="hangman-stroke" x1="337.08" y1="537.92" x2="409.92" y2="465.08"/> : ""}
  {lifePoints < 3 ? <line className="hangman-stroke" x1="482.92" y1="537.92" x2="410.08" y2="465.08"/> : ""}
  {lifePoints < 2 ? <line className="hangman-stroke" x1="321.16" y1="414.32" x2="410.36" y2="362.82"/> : ""}
  {lifePoints < 1 ? <line className="hangman-stroke" x1="499.32" y1="414.63" x2="410.11" y2="363.13"/> : ""}
    </svg>


        </div>
    )
}