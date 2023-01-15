import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ReadMore from './components/ReadMore/ReadMore';

function App() {
	const [card, setCard] = useState([]);

	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/zile028/fake-db/main/movie-db.json'
		)
			.then((res) => res.json())
			.then((data) => {
				setCard(data.movies);
			});
	}, []);
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home card={card} />} />
				<Route path='/contact' element={<Home />} />
				<Route path='/gallery' element={<Home />} />
				<Route
					path='/readmore/:id'
					element={<ReadMore card={card} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
