(function(){

    let data_;

    fetch("https://randomuser.me/api/").then(data => data.json()).then(data2 =>{
            
        firstname = data2.results[0]['name']['first'];
        lastname = data2.results[0]['name']['last'];

    

    })

    // console.log("hello");




}());