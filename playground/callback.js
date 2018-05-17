let getUser = (id, callback) =>{
    let user={
    	name:'Isfar',
		age:25
	};
    callback(user);
};

getUser(31,(userObj)=>{
	console.log(userObj);
});