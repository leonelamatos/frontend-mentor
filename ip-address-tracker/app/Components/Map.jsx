import React from 'react';
import { useState, useContext } from 'react';
import styles from '../styles/Map.module.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { LocationContext } from '../context/dataContext';
import axios from 'axios';

function SetViewOnClick({ coords,  }) {
	const map = useMap();
	const bounds = map.getBounds();
	map.fitBounds(bounds, {
		paddingTopLeft: [10,100],
	});
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
				center={[Number(state.lat), Number(state.lng)]}
				zoom={15}
				scrollWheelZoom={false}
				boundsOptions={{
					paddingBottomRight: [-250, 0],
				}}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap2</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[state.lat, state.lng]}>
					<Popup>
						{state.city} <br />
						{state.postalCode}
					</Popup>
				</Marker>
				<SetViewOnClick coords={[state.lat, state.lng]} />
			</MapContainer>
		</section>
	);
}

export default MapConponent;
