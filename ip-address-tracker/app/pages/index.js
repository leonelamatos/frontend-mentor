import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import DisplayData from '../Components/DisplayData';
import Header from '../Components/Header';
// import Map from '../Components/Map';
const Map = dynamic(() => import('../Components/Map'), { ssr: false });

export default function Home() {
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
