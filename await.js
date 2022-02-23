async function registersUser(username, password){
    
       feedback = await checkUserExists(username);

        return "working";

}


try{
    registersUser("jamesuser", "password").then((data) =>{
       console.log(data)
    })
    
}catch(e){
    console.log("Error: ", e);
}




function checkUserExists(username){
        return "exists";
}