import './home.scss';
import Cards from '../Cards/Cards';

const Home = ({ card }) => {
	return (
		<div className='container'>
			{card.length ? <Cards card={card} /> : 'No Cards'}
		</div>
	);
};

export default Home;
