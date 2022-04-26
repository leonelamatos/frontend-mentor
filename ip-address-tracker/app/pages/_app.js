import '../styles/globals.css';
import 'leaflet/dist/leaflet.css';
import { LocationProvider } from '../context/dataContext';

function MyApp({ Component, pageProps }) {
	return (
		<LocationProvider>
			<Component {...pageProps} />
		</LocationProvider>
	);
}

export default MyApp;
