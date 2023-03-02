import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";	
import Contact from "./components/Contact";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock"; 

function App() {

	return (	
		<>
			<BrowserRouter>
				<div style={{
					display: "flex",
					background: 'black',
					padding: '5px 0 5px 5px',
					fontSize: '20px'
				}}>
					<div style={{ margin: '10px' }}>
						<NavLink to="/" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Home
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/about" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							About
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/contact" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Contact
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/welcome" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Welcome
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/clock" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Clock
						</NavLink>
					</div>
				</div>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/contact" element={<Contact />} />
					<Route exact path="/welcome" element={<Welcome />} />
					<Route exact path="/clock" element={<Clock />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

