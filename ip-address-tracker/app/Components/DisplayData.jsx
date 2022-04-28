import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import useSWR from 'swr';
import { LocationContext } from '../context/dataContext';
import styles from '../styles/Display.module.css';
const fetcher = (url) => axios.get(url).then((res) => res.data);

function DisplayData() {
	const { state, updateLocation } = useContext(LocationContext);
	const { data, error } = useSWR('https://ipwho.is/', fetcher);
	useEffect(() => {
		updateLocation(data);
	}, [data]);

	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<section className={`container ${styles.wrapper}`}>
			<div className={styles.box}>
				<div className={styles.boxContent}>
					<p>ip address</p>
					<h2>{state.ip}</h2>
					<div className={styles.vr}></div>
				</div>
				<div className={styles.boxContent}>
					<p>location</p>
					<h2>
						{state.city ? state.city : state.stateProv},{' '}
						{state.regionCode ? state.regionCode : state.country_code}
						{state.postalCode}
					</h2>
				</div>
				<div className={styles.boxContent}>
					<p>timezone</p>
					<h2>UTC {state.timezone}</h2>
				</div>
				<div className={styles.boxContent}>
					<p>isp</p>
					<h2>{state.isp}</h2>
				</div>
			</div>
		</section>
	);
}

export default DisplayData;
