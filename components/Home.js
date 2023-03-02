import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";

const Home = () => {

	return (
		<>
			<h1 style={{ color: "green" }}>
				Welcome to GeeksForGeeks</h1>
				<NavLink to="/clock">
							Clock
						</NavLink>
				<div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>

    </div>
		</>
	)
};

export default Home;
