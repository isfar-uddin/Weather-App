const request = require('request');
const API_KEY = '0779db04502ae9d7917f5fb5215bf665';

//secret key for dark sky 0779db04502ae9d7917f5fb5215bf665


let getWeather = (lat, lng, callback) => {
	debugger;
	request({
		url: `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect Forecast.io server');
		} else if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature
			})
		} else {
			callback("Unable to fetch weather data.");
		}
	})
};


module.exports = {
	getWeather
};