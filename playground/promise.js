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
});