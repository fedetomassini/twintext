import React, { useState } from "react";
import { motion } from "framer-motion";

function isPalindrome(string: string) {
	const cleanString = string
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-zA-Z0-9]/g, "")
		.toLowerCase();

	return (
		cleanString === cleanString.split("").reverse().join("") && cleanString.length > 1 && /[a-z]/i.test(cleanString)
	);
}

export const App = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState<{
		isPalindrome: boolean | null | undefined;
		message: string;
	}>({ isPalindrome: null, message: "" });

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (input.trim() === "") {
			setResult({
				isPalindrome: undefined,
				message: "Please enter a word or phrase.",
			});
		} else {
			const palindromeResult = isPalindrome(input);
			setResult({
				isPalindrome: palindromeResult,
				message: palindromeResult ? "Yep, that's a palindrome!" : "Nope, that's not a palindrome.",
			});
		}
	};

	return (
		<div className="bg-[#393646] relative flex flex-col items-center justify-center min-h-screen p-4 text-white">
			<div className="absolute top-4 left-4 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2">
				<div className="flex-col items-center space-x-0">
					<div className="inline-flex items-center">
						<img src={"/contents/logo.webp"} className="w-20 h-20" alt="T" />
						<span className="bg-gradient-to-r from-[#FFE0A9] to-[#FBD6B6] bg-clip-text text-transparent text-3xl font-bold">
							win
						</span>
					</div>
					<div>
						<p className="text-sm font-medium text-center mt-1">
							by
							<a
								href="https://www.linkedin.com/in/fedetomassini/"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-gradient-to-r from-[#FFE0A9] to-[#FBD6B6] bg-clip-text text-transparent ml-1"
							>
								fedetomassini
							</a>
						</p>
					</div>
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="w-full max-w-md"
			>
				<form onSubmit={handleSubmit} className="bg-[#4F4557] shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
					<div className="mb-4">
						<label htmlFor="palindromeInput" className="block text-sm font-bold mb-2">
							Enter a word or phrase:
						</label>
						<input
							id="palindromeInput"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							placeholder="Type here..."
							value={input}
							onChange={handleInputChange}
							autoComplete="off"
						/>
					</div>
					<div className="flex items-center justify-center">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="bg-[#6D5D6E] hover:bg-[#F4EEE0] hover:text-[#393646] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
							type="submit"
						>
							Check Palindrome
						</motion.button>
					</div>
				</form>
			</motion.div>

			{result.isPalindrome !== null && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.25, ease: "easeInOut" }}
					className="w-full max-w-md"
				>
					<div
						className={`bg-[#4F4557] shadow-lg rounded-lg px-8 py-6 text-center ${
							result.isPalindrome ? "text-green-400" : "text-red-400"
						}`}
					>
						<p className="text-xl font-semibold">{result.message}</p>
						{result.isPalindrome && (
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ delay: 0.25, ease: "easeInOut" }}
								className="mt-2 text-[#F4EEE0]"
							>
								Forward: {input}
								<br />
								Backward: {input.split("").reverse().join("")}
							</motion.p>
						)}
					</div>
				</motion.div>
			)}
		</div>
	);
};
