let promise = new Promise((resolve, reject) =>{
    
    let username = "James";

    if(username == "James"){
        resolve("Success");
    }else{
        reject("Not successful");
    }
    
});


function getUser(data){
    data = "Jerry";

    return data;
}


promise.then((data) =>{
   return data;
}).then((data) =>{
   console.log("This is data: ", data)
   return getUser(data)
}).then((data) =>{
    console.log(data);
})

.catch(function(data){
    console.log(data); 
})