import React, { useState } from "react";
import NavBar from "./navbar/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Culture from "../pages/guide/Culture";
import Gastronomy from "../pages/guide/Gastronomy";
import Transport from "../pages/guide/Transport";
import Terrain from "../pages/guide/Terrain";
import Login from "../pages/events/Login";
import Signup from "../pages/events/signup/Signup";
import Home from "../pages/home/Home";
import { useAuthContext } from "../context/AuthContext";
import Chat from "../pages/events/Chat";
import News from "../pages/competition/News";
import Videos from "../pages/competition/Videos";
import Tickets from "../pages/competition/Tickets";
import culturePath from "../zustand/cultureState";
import Footer from "./Footer";
import GroupStage from "../pages/competition/GroupStage";

export default function Layout() {
	const { path } = culturePath();
	const { authUser } = useAuthContext();

	return (
		<BrowserRouter>
			<NavBar />
			<div style={{ paddingTop: "13vh" }} className='relative'>
				{" "}
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route path='/guide/culture' element={<Culture />} />
					<Route path='/guide/gastronomy' element={<Gastronomy />} />
					<Route path='/guide/transport' element={<Transport />} />
					<Route path='/guide/terrain' element={<Terrain />} />
					<Route
						path='/events/login'
						element={authUser ? <Navigate to='/events' /> : <Login />}
					/>
					<Route
						path='/events/signup'
						element={authUser ? <Navigate to='/events' /> : <Signup />}
					/>
					<Route
						path='/events'
						element={authUser ? <Chat /> : <Navigate to='/events/login' />}
					/>
					<Route path='/competition/news' element={<News />} />
					<Route path='/competition/videos' element={<Videos />} />
					<Route path='/competition/tickets' element={<Tickets />} />
					<Route path='/competition/groupstages' element={<GroupStage />} />
				</Routes>
				{path === "/guide/culture" ||
				path === "/events/login" ||
				path === "/events/signup" ||
				path === "/events" ? (
					""
				) : (
					<Footer />
				)}
				{/* {console.log(path)} */}
			</div>
		</BrowserRouter>
	);
}
