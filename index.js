function submitData(name,email){
    
    let userObject={
        "name": name,
        "email": email
    }
    let configObj = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
        body: JSON.stringify(userObject)
        
    };
    
    return fetch("http://localhost:3000/users",configObj).then(function(response){
        return response.json(); 
    } )
    .then(function(response) { 
            document.write(response.id);
        // let p = document.createElement('p');
        // document.querySelector('body').appendChild(p);
        // p.innerHTML+='<p>"' +response.id+ '"</p>';
    })
    .catch(function(error) {
            document.write(error.message);
            // let p = document.createElement('p');
            // document.querySelector('body').appendChild(p);
            // p.innerHTML+='<p>"' +error.message+ '"</p>';
            });
}
submitData("mira","mira.ar230@gmail.com")