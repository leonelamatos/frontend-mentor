import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap'
					rel='stylesheet'
				></link>
				<link
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
					rel='stylesheet'
				></link>
				<link
					rel='stylesheet'
					href='https://unpkg.com/leaflet@1.8.0/dist/leaflet.css'
					integrity='sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=='
					crossOrigin='anonymous'
				/>
				{/* <script src='https://unpkg.com/leaflet@1.8.0/dist/leaflet.js' crossOrigin='anonymous' defer></script> */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
