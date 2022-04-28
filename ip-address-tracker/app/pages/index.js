import Head from 'next/head';
import dynamic from 'next/dynamic';
import DisplayData from '../Components/DisplayData';
import Header from '../Components/Header';

const Map = dynamic(() => import('../Components/Map'), { ssr: false });

export default function Home() {
	return (
		<>
			<Head>
				<title>IP Address Tracker</title>
				<script
					src='https://unpkg.com/leaflet@1.8.0/dist/leaflet.js'
					integrity='sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=='
					crossOrigin=''
					async
				></script>
			</Head>
			<Header />
			<DisplayData />
			<Map />
		</>
	);
}
