import React from "react";
import NavBar from "./navbar/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Culture from "../pages/guide/Culture";
import Gastronomy from "../pages/guide/Gastronomy";
import Transport from "../pages/guide/Transport";
import Terrain from "../pages/guide/Terrain";
import Login from "../pages/contactus/Login";
import Signup from "../pages/contactus/signup/Signup";
import Home from "../pages/home/Home";
import { useAuthContext } from "../context/AuthContext";
import Chat from "../pages/community/Chat";

export default function Layout() {
	const { authUser } = useAuthContext();
	return (
		<BrowserRouter>
			<NavBar />
			<div style={{ paddingTop: "15vh" }}>
				{" "}
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route path='/guide/culture' element={<Culture />} />
					<Route path='/guide/gastronomy' element={<Gastronomy />} />
					<Route path='/guide/transport' element={<Transport />} />
					<Route path='/guide/terrain' element={<Terrain />} />
					<Route
						path='/contact/login'
						element={authUser ? <Navigate to='/community/chat' /> : <Login />}
					/>
					<Route
						path='/contact/signup'
						element={authUser ? <Navigate to='/community/chat' /> : <Signup />}
					/>
					<Route
						path='/community/chat'
						element={authUser ? <Chat /> : <Navigate to='/contact/login' />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

{
	/* <Routes>
				<Route
					index
					path='/'
					element={authUser ? <Home /> : <Navigate to='/login' />}
				/>
				<Route
					path='/login'
					element={authUser ? <Navigate to='/' /> : <Login />}
				/>
				<Route
					path='/signup'
					element={authUser ? <Navigate to='/' /> : <Signup />}
				/>
			</Routes>
			<Toaster /> */
}
