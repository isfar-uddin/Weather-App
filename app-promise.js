const yargs = require('yargs');
const axios = require('axios');

const API_KEY = '0779db04502ae9d7917f5fb5215bf665';

let argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			description: 'Address to fetch weather for',
			string: true,
		}
	})
	.help()
	.alias('help', 'h')
	.argv;


let encodedAddress = encodeURIComponent(argv.address);

let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
	if (response.data.status === 'OVER_QUERY_LIMIT') {
		throw new Error('Request limit is over.');
	} else if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find that address');
	}
	let lat = response.data.results[0].geometry.location.lat;
	let lng = response.data.results[0].geometry.location.lng;
	let weatherUrl = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`;
	return axios.get(weatherUrl);
})
	.then((response) => {
		console.log(response.data.currently.temperature);
	})
	.catch((error) => {
		console.log(error.code);
		if (error.code === "ENOTFOUND") {
			console.log('Unable to connect to API server');
		} else {
			console.log(error.message);
		}
	});