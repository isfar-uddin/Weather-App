let request = require('request');

let geoCode = (address) => {
	return new Promise((resolve, reject) => {
		let encodedAddress = encodeURIComponent(address);
		request({
			url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
			json: true
		}, (error, response, body) => {
			if (error) {
				reject('Unable to connect with google server.');
			} else if (body.status === "ZERO_RESULTS") {
				reject("Unable to fetch location data.");
			} else if (body.status === "OVER_QUERY_LIMIT") {
				reject("Your request limit exceeds.");
			} else if (body.status === 'OK') {
				resolve({
					address: body.results[0].formatted_address,
					lat: body.results[0].geometry.location.lat,
					lng: body.results[0].geometry.location.lng
				})
			}
		})
	})
};


geoCode('00000').then((location) => {
	console.log(location);
}, (error) => {
	console.log(error);
});