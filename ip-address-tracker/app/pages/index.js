import Head from 'next/head';
import Image from 'next/image';
import DisplayData from '../Components/DisplayData';
import Header from '../Components/Header';
import Map from '../Components/Map';

export default function Home() {
	return (
		<>
			<Head>
				<title>IP Address Tracker</title>
				<link
					href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap'
					rel='stylesheet'
				></link>
				<link
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
					rel='stylesheet'
				></link>
			</Head>
			<Header />
			<DisplayData />
			<Map />
		</>
	);
}
