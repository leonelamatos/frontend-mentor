import { useContext, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import DisplayData from '../Components/DisplayData';
import Header from '../Components/Header';
import axios from 'axios';

import { LocationContext } from '../context/dataContext';
const Map = dynamic(() => import('../Components/Map'), { ssr: false });
const API_KEY = process.env.API_KEY;

export const getStaticProps = async () => {
	try {
		const { data } = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`);

		console.log(data);
		return { props: { data } };
	} catch (error) {
		console.log(error);
		return { props: { error } };
	}
};
export default function Home(props) {
	const { updateLocation } = useContext(LocationContext);

	useEffect(() => {
		updateLocation(props.data);
	}, []);

	return (
		<>
			<Head>
				<title>IP Address Tracker</title>
			</Head>
			<Header />
			<DisplayData />
			<Map />
		</>
	);
}
