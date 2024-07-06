import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Culture from "../pages/guide/Culture";
import Gastronomy from "../pages/guide/Gastronomy";
import Transport from "../pages/guide/Transport";
import Terrain from "../pages/guide/Terrain";
import ContactUs from "../pages/contactUs";

export default function Layout() {
	return (
		<BrowserRouter>
			<NavBar />
			<div style={{ paddingTop: "18vh" }}>
				{" "}
				{/* minHeight: "calc(100vh - 80px)" */}
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route path='/guide/culture' element={<Culture />} />
					<Route path='/guide/gastronomy' element={<Gastronomy />} />
					<Route path='/guide/transport' element={<Transport />} />
					<Route path='/guide/terrain' element={<Terrain />} />
					<Route path='/contact' element={<ContactUs />} />
				</Routes>
			</div>
			{/* <TAA/> 
			   <Route path='/competition/groupstages' element={<GroupStages />} />			
			*/}
		</BrowserRouter>
	);
}
