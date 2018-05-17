console.log('starting app');

setTimeout(() => {
	console.log('Inside callback');
}, 2000);

setTimeout(() => {
	console.log('Second function');
}, 0);
console.log('finishing app');
