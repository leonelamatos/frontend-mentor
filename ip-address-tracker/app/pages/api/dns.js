var dns = require('dns').promises;
const axios = require('axios').default;

export default async function dnslookup(req, res) {
	const domain = req.body.ip || req.query.ip;
	try {
		const { address } = await dns.lookup(domain);

		const result = await axios.get(`https://ipwho.is/${address}`);

		res.json(result.data);
	} catch (error) {
		console.error(error);
		res.json({ ...error });
	}
}
