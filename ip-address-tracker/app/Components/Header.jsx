import axios from 'axios';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { LocationContext } from '../context/dataContext';
import styles from '../styles/Header.module.css';

const API_KEY = process.env.API_KEY;
export default function Header() {
	const [query, setQuery] = useState('');

	const { updateLocation } = useContext(LocationContext);

	// console.log(value);

	const handleOnApiChange = (e) => {
		setQuery(e.target.value);
	};
	const _onSubmit = async (e) => {
		e.preventDefault();
		const { data } = await axios.post('/api/dns', { ip: query });
		updateLocation(data);
	};
	return (
		<section className={styles.header}>
			<header className='container'>
				<h1 className={styles.h1Heading}>IP Address Tracker</h1>
				<form className={styles.inputGroup} onSubmit={_onSubmit}>
					<input className={styles.inputItem} name='ip' value={query} onChange={handleOnApiChange} />
					<button className={styles.btn} type='submit'>
						<i className='fa fa-chevron-right' />
					</button>
				</form>
			</header>
		</section>
	);
}
