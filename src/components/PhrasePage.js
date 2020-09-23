import React from 'react';
import Keyboard from './Keyboard';
import PhraseInput from './PhraseInput';
import TyperControlPanel from './TyperControlPanel';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function PhrasePage(){
    const lang = useSelector(state => state.lang)

    return(
        <>
        <PhraseInput />
        <Keyboard />
        <TyperControlPanel />

        {!lang ? <Redirect to="/" /> : ""}
        </>
    )
} 