// import React, { useState } from "react";
// import { BsSend } from "react-icons/bs";
// import useSendMessage from "../../hooks/useSendMessage";

// export default function MessageInput() {
// 	const [inputValue, setInputValue] = useState();
// 	const { sendMessage, loading } = useSendMessage();
// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		if (!inputValue) return;
// 		await sendMessage(inputValue);
// 		setInputValue("");
// 	};
// 	return (
// 		<form className='px-4 my-3' onSubmit={handleSubmit}>
// 			<div className='w-full relative'>
// 				<input
// 					type='text'
// 					className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
// 					placeholder='send a message'
// 					onChange={(e) => setInputValue(e.target.value)}
// 				/>
// 				<button
// 					type='submit'
// 					className='absolute inset-y-0 end-0 flex items-center pe-3'
// 				>
// 					{loading ? <div className="loading loading-spinner"></div> : <BsSend />}
// 				</button>
// 			</div>
// 		</form>
// 	);
// }

import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

export default function MessageInput() {
	const [inputValue, setInputValue] = useState();
	const { loading, sendMessage } = useSendMessage();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!inputValue) return;
		await sendMessage(inputValue);
		setInputValue("");
	};
	return (
		<form className='px-4 my-3'>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
					placeholder='send a message'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button
					onClick={handleSubmit}
					type='submit'
					className='absolute inset-y-0 end-0 flex items-center pe-3'
				>
					{loading ? (
						<div className='loading loading-spinner'></div>
					) : (
						<BsSend />
					)}
				</button>
			</div>
		</form>
	);
}
