let asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === "number" && typeof b === "number") {
				resolve(a + b);
			} else {
				reject("Arguments must be number");
			}
		}, 1500)
	});
};

asyncAdd(3, 4).then((res) => {
	return asyncAdd(res, 12);
}).then((res) => {
	console.log(res);
}).catch((errorMessage)=>{
	console.log(errorMessage);
});

/*
 let somePromise = new Promise((resolve,reject)=>{
 setTimeout(()=>{
 //resolve("Hey, It's worked!");
 reject("Unable to fetch data.");
 },2500)
 });

 somePromise.then((message)=>{
 console.log("Success: ", message);
 },(errorMessage)=>{
 console.log("Failed: ",errorMessage);
 });*/
