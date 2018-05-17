const request = require('request');

let geoCodeAddress = (address, callback) => {
	let encodedAddress = encodeURIComponent(address);

	request({
		//url: 'https://maps.googleapis.com/maps/api/geocode/json?address=amtoli%20Dhaka',
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to google servers');
		} else if (body.status === 'ZERO_RESULTS') {
			callback(`Unable to find ${encodedAddress}`);
		} else if (body.status === 'OK') {
			callback(undefined, {
				address: body.results[0].formatted_address,
				lat: body.results[0].geometry.location.lat,
				lng: body.results[0].geometry.location.lng
			});
		} else if (body.status === 'OVER_QUERY_LIMIT') {
			callback("Your request limit");
		}
	});
};



module.exports = {
	geoCodeAddress,
};