import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

export default function Login() {
	const [userName, setUserName] = useState();
	const [password, setPassword] = useState();
	const { loading, login } = useLogin();
	const handleSubmit = async (e) => {
		e.preventDefault();
		await login({ userName, password });
		<Navigate to='/community/chat' />;
	};
	return (
		<div className='element-center h-[85vh] w-full bg-black contactBG'>
			<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
				<div className='w-full rounded-lg p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0'>
					<h1 className='text-3xl font-semibold text-center text-gray-300'>
						Login <span className='text-[#00A448]'>ChatApp</span>
					</h1>
					<form onSubmit={handleSubmit}>
						<div>
							<label className='label p-2'>
								<span className='text-base label-text'>Username</span>
							</label>
							<input
								type='text'
								placeholder='Enter username'
								className='w-full input input-bordered h-10'
								onChange={(e) => setUserName(e.target.value)}
							/>
						</div>
						<div>
							<label className='label p-2'>
								<span className='text-base label-text'>Password</span>
							</label>
							<input
								type='password'
								placeholder='Enter Password'
								className='w-full input input-bordered h-10'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<Link
							to='/contact/signup'
							className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
						>
							Don't have a account?
						</Link>
						<div>
							<button className='btn btn-block btn-sm mt-2' disabled={loading}>
								{loading ? (
									<span className='loading loading-spinner'></span>
								) : (
									"Login"
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}