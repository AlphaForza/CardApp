import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

const Cards = ({ card }) => {
	return (
		<>
			{card.map((item, index) => {
				return (
					<div className='card' key={index}>
						<h2>{item.title}</h2>
						<p>{item.plot}</p>
						<div>
							{item.genres.map((genre, index) => {
								return <span key={index}>{`#${genre}`}</span>;
							})}
						</div>
						{/* ponovo ovo!! */}
						<Link to={`/readmore/${item.id}`} className='link'>
							Read More
						</Link>
					</div>
				);
			})}
		</>
	);
};

export default Cards;
