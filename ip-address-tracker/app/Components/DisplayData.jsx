import axios from 'axios';
import moment from 'moment-timezone';
import React, { useContext } from 'react';
import { LocationContext } from '../context/dataContext';
import styles from '../styles/Display.module.css';

function DisplayData() {
	const { state } = useContext(LocationContext);

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
						{state.regionISOCode ? state.regionISOCode : state.country_code}
						{/* <br /> */}
						{' '} {state.postalCode}
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
