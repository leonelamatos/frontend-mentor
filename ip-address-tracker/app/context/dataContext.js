import moment from 'moment-timezone';
import React, { useState, createContext, useReducer } from 'react';

const API_KEY = process.env.API_KEY;

const locationReducer = (state, action) => {
	switch (action.type) {
		case 'update_location':
			return {
				ip: action.payload.ip,
				stateProv: action.payload.state_prov,
				regionISOCode: action.payload.country_code2,
				countryCode: action.payload.country_name,
				city: action.payload.city,
				lat: action.payload.latitude,
				lng: action.payload.longitude,
				postalCode: action.payload.zipcode,
				timezone: action.payload.time_zone?.offset,
				isp: action.payload.isp,
			};

		default:
			return state;
	}
};
export const LocationContext = createContext({ updateLocation: (arg) => arg, state: {} });

export const LocationProvider = ({ children }) => {
	const initialState = {
		ip: '',
		region: '',
		regionISOCode: '',
		countryCode: '',
		city: '',
		lat: '',
		lng: '',
		postalCode: '',
		timezone: '',
		isp: '',
	};
	const [state, dispatch] = useReducer(locationReducer, initialState);

	const updateLocation = async (location) => {
		const offset = moment().tz(location.time_zone?.name).format('Z');

		location.time_zone.offset = offset;

		// @ts-ignore
		dispatch({
			type: 'update_location',
			payload: location,
		});
	};

	return <LocationContext.Provider value={{ state, updateLocation }}>{children}</LocationContext.Provider>;
};
