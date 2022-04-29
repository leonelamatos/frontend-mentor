var dns = require('dns').promises;
const axios = require('axios').default;

const randomNumber = (max) => Math.floor(Math.random() * max);

export default async function dnslookup(req, res) {
	const domain = req.body.ip || req.query.ip;
	try {
		// resolve the domain IPv4 if a domain name is sent.
		// const { address } = await dns.lookup(domain);
		const address = await dns.resolve(domain);

		// get a random number from the return array length
		const randomIP = randomNumber(address.length);

		// select an IP address based on the random number
		const ipAddress = address[randomIP];

		// call the api with the selected ip
		const result = await axios.get(`https://ipwho.is/${ipAddress}`);

		res.json(result.data);
	} catch (error) {
		console.error(error);
		res.json({ ...error });
	}
}
