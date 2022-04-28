import React from 'react';
import { useState, useContext, useEffect } from 'react';
import styles from '../styles/Map.module.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { LocationContext } from '../context/dataContext';

function SetView({ coords }) {
	const map = useMap();

	// const initialBound = map.getBounds();
	// const [bounds, setBounds] = useState(initialBound);
	// useEffect(() => {
	// 	setBounds(map.getBounds());
	// }, [map.getBounds]);

	// map.fitBounds(bounds, {
	// 	paddingTopLeft: [10, 200],
	// });

	map.setView(coords, map.getZoom());

	return null;
}

function MapConponent() {
	const { state } = useContext(LocationContext);

	// console.log(state);
	// 21.0313
	// longitude: 105.8516;
	return (
		<section className='container'>
			<MapContainer
				className={styles.wrapper}
				center={[state?.lat, state?.lng]}
				zoom={15}
				scrollWheelZoom={false}
				// boundsOptions={{
				// 	paddingTopLeft: [300, 300],
				// }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap2</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[state?.lat, state?.lng]}>
					<Popup>
						{state.city} <br />
						{state.postalCode}
					</Popup>
				</Marker>
				<SetView coords={[state?.lat, state?.lng]} />
			</MapContainer>
		</section>
	);
}

export default MapConponent;
