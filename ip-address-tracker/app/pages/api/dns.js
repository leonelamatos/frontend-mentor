var dns = require('dns').promises;
const axios = require('axios').default;

const API_KEY = process.env.API_KEY;

export default async function dnslookup(req, res) {
	const ipAddress = req.body.ip || req.query.ip;
	try {
		const { address } = await dns.lookup(ipAddress);
		console.log(address);

		const urlString =
			address === null
				? `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`
				: `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${address}`;

		const result = await axios.get(urlString);

		console.log(result.data);
		res.json(result.data);
	} catch (error) {
		console.error(error);
	}
}

// address === null
// 	? `https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}`
// 	: `https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}&ip_address=${address}`;
