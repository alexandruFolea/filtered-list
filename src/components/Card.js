import React from 'react';
import Lang from './Lang';

const Card = ({
	image,
	company,
	position,
	postedAt,
	contract,
	location,
	languages,
	tools,
	role,
	level,
	featured,
}) => {
	return (
		<div className='card'>
			<div className='card__top'>
				<img src={image} alt='' className='card__img' />
				<div className='card__nonsense'>
					<div className='card__title'>
						<h4>{company}</h4>
					</div>
					<div className='card__body'>
						<h2>{position}</h2>
						<ul className='card__list'>
							<li>{postedAt}</li>
							<li>{contract}</li>
							<li>{location}</li>
						</ul>
						<hr />
					</div>
				</div>
			</div>
			<div className='bottom'>
				<ul>
					<li>{role}</li>
					<li>{level}</li>
					{languages.map((language, index) => (
						// <Lang languages={language} key={index} />
						<li key={index}>{language}</li>
					))}
					{tools.map((tool, index) => {
						return <li key={index}>{tool}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Card;
