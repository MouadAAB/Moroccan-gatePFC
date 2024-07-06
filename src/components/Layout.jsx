import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Culture from "../pages/guide/culture";
import Gastronomy from "../pages/guide/gastronomy";
//import Hotels from "../pages/guide/Hotels";
import Transport from "../pages/guide/transport";
import Terrain from "../pages/guide/terrain";
//import GroupStages from "../pages/competition/groupstages";
import ContactUs from "../pages/contactUs";
// import TAA from "../TAA";

export default function Layout() {
	return (
		<BrowserRouter>
			<NavBar />
		<Routes>
			<Route index path="/" element={<Home />} />
		</Routes>
			<div style={{ paddingTop: "100px", minHeight: "calc(100vh - 80px)" }}>
        <Routes>
          
          <Route path="/guide/culture" element={<Culture />} />
          <Route path="/guide/gastronomy" element={<Gastronomy />} />
          <Route path="/guide/transport" element={<Transport />} />
		  <Route path='/guide/terrain' element={<Terrain />} />
		  
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      		</div>
			{/* <TAA/> 
			   <Route path='/competition/groupstages' element={<GroupStages />} />
				<Route path='/guide/gastronomy' element={<Gastronomy />} />
				<Route path='/guide/hotels' element={<Hotels />} />
				<Route path='/guide/transport' element={<Transport />} />
				<Route path='/guide/terrain' element={<Terrain />} />
			
			*/}
		</BrowserRouter>
	);
}
