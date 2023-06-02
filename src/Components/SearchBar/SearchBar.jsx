import React, { useState, useEffect } from "react"
import '../SearchBar/SearchBar.scss';

function isPalindrome(string) {
	string = string.replace(/[^\w]/g, '').toLowerCase();
	let invertedString = string.split('').reverse().join('');

	// console.info(string, invertedString); 
	// Just the string and invertedString
	
	if (string === '' || null) {
		return null;
	} else if (string.length >= 2 && string === invertedString && string.match(/[a-z]/i)) {
		return true;
	} else {
		return false;
	}
}



export default function SearchBar(){

	const [sentenceIsPalindrome, setSentenceIsPalindrome] = useState(null);
	const [inputValue, setInputValue] = useState("");
	const [invertedValue, setInvertedValue] = useState("");

	useEffect(() => {
		if (sentenceIsPalindrome === null) {
			setSentenceIsPalindrome(null) // Empty
		} else if (sentenceIsPalindrome) {
			setSentenceIsPalindrome(true) // IsPalindrome
		} else {
			setSentenceIsPalindrome(false); // !IsPalindrome
		}
	}, [sentenceIsPalindrome]);

	const handleSearch = (event) => {
		event.preventDefault();
		const input = event.target.elements.searchInput.value;
		const isInputPalindrome = isPalindrome(input);
		setSentenceIsPalindrome(isInputPalindrome);
		
		setInputValue(input);
		setInvertedValue(input.split("").reverse().join(""));
	};

	return(
		<>
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid">
				<form className="d-flex" role="search" onSubmit={handleSearch}>
				<input
					className="form-control me-2"
					type="search"
					placeholder="Write something..."
					aria-label="Search"
					name="searchInput"
					autoComplete="off"
            	/>
				<button className="btn btn-outline-success" type="submit">Check!</button>
				</form>
			</div>
		</nav>

		<section className="messagesContainer">
		<div className="sentenceMessageInputs">{inputValue + " " + " " + invertedValue}</div>
			
			{sentenceIsPalindrome === null ? (
				<div className="sentenceMessageNull"><i className="fa-regular fa-square-full"></i> Hey, you need to write something... <i className="fa-regular fa-square-full"></i></div>
			) : sentenceIsPalindrome ?  (
				<div className="sentenceMessageTrue"><i className="fa-regular fa-circle-check"></i> Yep, that's a Palindrome! {" "} <i className="fa-regular fa-circle-check"></i>
				</div>
			) : (
				<div className="sentenceMessageFalse"><i className="fa-regular fa-circle-xmark"></i> Nope, that's not a Palindrome! {" "} <i className="fa-regular fa-circle-xmark"></i></div>
			)}
		</section>

		</>
	)
}