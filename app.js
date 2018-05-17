const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geoCodeAddress(argv.address, (errosMessage, results) => {
	if (errosMessage) {
		console.log(errosMessage);
	} else {
		weather.getWeather(results.lat, results.lng, (errosMessage, results) => {
			if (errosMessage) {
				console.log(errosMessage);
			} else {
				console.log("Temperature: ", results.temperature);
			}
		})
	}
});