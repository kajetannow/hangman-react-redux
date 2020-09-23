import React from 'react';
import { useSelector } from 'react-redux'
import Hangman from './Hangman';
import GuessingKeyboard from './GuessingKeyboard';
import PhraseLetters from './PhraseLetters';
import { Redirect } from 'react-router-dom';
export default function PhraseTyper(props){
    const lifePoints = useSelector(state => state.hangman.lifePoints)
    const unguessedPoints = useSelector(state => state.hangman.unguessedPoints)
    const lang = useSelector(state => state.lang)
    const acceptedPhrase = useSelector(state => state.hangman.guessed)

    return(
        <>
        <Hangman />
        <PhraseLetters />
        <GuessingKeyboard />

        {unguessedPoints <=0 ? <Redirect to="/victory" /> : ""}
        {lifePoints <=0 ? <Redirect to="/defeat" /> : ""}

        {!acceptedPhrase ? <Redirect to="/phrase" /> : ""}
        {!lang ? <Redirect to="/" /> : ""}
        </>
    )
} 