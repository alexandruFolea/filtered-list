import './styles/main.scss';
import Card from './components/Card';
import data from './data.json';

function App() {
	return (
		<div className='main'>
			{data.map((item) => (
				<Card
					image={item.logo}
					company={item.company}
					position={item.position}
					postedAt={item.postedAt}
					contract={item.contract}
					location={item.location}
					languages={item.languages}
					tools={item.tools}
					role={item.role}
					level={item.level}
				/>
			))}
		</div>
	);
}

export default App;
