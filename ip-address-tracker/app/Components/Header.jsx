import Image from 'next/image';
import React from 'react';
import styles from '../styles/Header.module.css';
// import bgImage from '../public/images/pattern-bg.png';
export default function Header() {
	const _onSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<section className={styles.header}>
			<header className='container'>
				<h1 className={styles.h1Heading}>IP Address Tracker</h1>
				<form className={styles.inputGroup} onSubmit={_onSubmit}>
					<input className={styles.inputItem} />
					<button className={styles.btn} type='submit'>
						<i className='fa fa-chevron-right' />
					</button>
				</form>
			</header>
			{/* <Image className='img' src={bgImage} alt='blue background'  /> */}
		</section>
	);
}
