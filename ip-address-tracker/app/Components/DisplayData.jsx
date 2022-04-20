import React from 'react';
import styles from '../styles/Display.module.css';

function DisplayData() {
	return (
		<section className={`container ${styles.wrapper}`}>
			{/* <div className={styles.grid}> */}
			<div className={styles.box}>
				<div className={styles.boxContent}>
					<p>ip address</p>
					<h2>192.212.174.101</h2>
					<div className={styles.vr}></div>
				</div>
				<div className={styles.boxContent}>
					<p>location</p>
					<h2>
						Brooklyn, NY
						<br />
						10001
					</h2>
				</div>
				<div className={styles.boxContent}>
					<p>timezone</p>
					<h2>UTC -05:00</h2>
				</div>
				<div className={styles.boxContent}>
					<p>isp</p>
					<h2>
						SpaceX
						<br /> Starlink
					</h2>
				</div>
			</div>
			{/* </div> */}
		</section>
	);
}

export default DisplayData;
