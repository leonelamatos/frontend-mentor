import moment from 'moment-timezone';
import React, { createContext, useReducer } from 'react';

const locationReducer = (state, action) => {
	switch (action.type) {
		case 'update_location':
			return {
				ip: action.payload?.ip,
				stateProv: action.payload?.state_prov,
				regionCode: action.payload?.region_code,
				countryCode: action.payload?.country_code,
				city: action.payload?.city,
				lat: action.payload?.latitude || 50,
				lng: action.payload?.longitude || 50,
				postalCode: action.payload?.postal,
				timezone: action.payload?.timezone?.utc,
				isp: action.payload?.connection?.isp,
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
		// @ts-ignore
		dispatch({
			type: 'update_location',
			payload: location,
		});
	};

	return <LocationContext.Provider value={{ state, updateLocation }}>{children}</LocationContext.Provider>;
};
