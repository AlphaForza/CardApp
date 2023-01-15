import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './readmore.scss';

const ReadMore = ({ card }) => {
	// useParams vraca "string"
	const { id } = useParams();

	function movie() {
		// find - vraca samo jedan element(el)
		const single = card.find((el) => el.id === parseInt(id));
		return (
			<div className='single'>
				<h2>{single.title}</h2>
				<div className='single-info'>
					<p>Year: {single.year}</p>
					<p>Runtime: {single.runtime}</p>
					<p>Direct: {single.director}</p>
				</div>
				<div className='single-desc'>
					<h3>{single.plot}</h3>
					<h5>{single.actors}</h5>
				</div>

				<Link to='/' className='link'>
					Back Home
				</Link>
			</div>
		);
	}

	return <div>{movie()}</div>;
};

export default ReadMore;
