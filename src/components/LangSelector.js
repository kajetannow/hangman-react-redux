import React from 'react';
import { languages as SupportedLangs } from './../config';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { setLang } from '../redux/actions';


export default function LangSelector(props){
    const dispatch = useDispatch()

    return(
        <>
        <h2>Select language:</h2>
        <div className="lang-selector">
        {SupportedLangs.map((lang,i)=>
        <Link key={i} to='/phrase'><button className="lang-btn" onClick={()=>dispatch(setLang(lang))}>
            {lang.toLocaleUpperCase()}
        </button>
        </Link>
        )}
        </div>
        </>
    )
} 