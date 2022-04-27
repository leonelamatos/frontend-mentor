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
				<link rel='icon' href='/favicon.png' />
				<script
					src='https://unpkg.com/leaflet@1.8.0/dist/leaflet.js'
					integrity='sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=='
					crossOrigin=''
				></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
