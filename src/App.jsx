import React from "react";
import icon from '../src/Assets/Icons/website.ico';
import '../src/Assets/Styles/App.scss';

import SearchBar from "./Components/SearchBar/SearchBar";

export default function App(){
    return(
        <>
            <section className="container">
                <img src={icon} height={232} alt="Palindrome Or Not?"/>
            	<h1 id='web_title'><a className="palindrome_link" href='https://en.wikipedia.org/wiki/Palindrome' target='_blank' rel="noreferrer">Palindrome</a> Or Not?</h1>
				{/*  */}
				<SearchBar/>
                <p className="copyright">Made by <a href="https://github.com/fedetomassini" target='_blank' rel="noreferrer">@fedetomassini</a></p>
            </section>

        </>
    )
}