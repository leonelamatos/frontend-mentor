import axios from 'axios';
import React, { useContext, useState } from 'react';
import { LocationContext } from '../context/dataContext';
import styles from '../styles/Header.module.css';

export default function Header() {
	const [query, setQuery] = useState('');
	const { updateLocation } = useContext(LocationContext);

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
					<input
						type='text'
						placeholder='Enter IP address or domain name'
						className={styles.inputItem}
						name='ip'
						value={query}
						onChange={handleOnApiChange}
					/>
					<button className={styles.btn} type='submit'>
						<i className='fa fa-chevron-right' />
					</button>
				</form>
			</header>
		</section>
	);
}
