import React from 'react';
import styles from '../styles/Map.module.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
function MapConponent() {
	const [location, setLocation] = useState({ lat: 51.505, lon: -0.09 });

	return (
		<section className='container'>
			<MapContainer
				className={styles.wrapper}
				center={[location.lat, location.lon]}
				zoom={16}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap2</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[location.lat, location.lon]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</section>
	);
}

export default MapConponent;
