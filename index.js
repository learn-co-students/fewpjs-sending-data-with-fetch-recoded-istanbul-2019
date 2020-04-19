// Add your code here

function submitData(){
    let user = {
        name: "Steve",
        email: "steve@steve.com"
    }
    
    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    }
    
   return fetch("http://localhost:3000/users", configObject).then(function(response) {
        return response.json();
    }).then(function (object) {
        let p = document.createElement('p');
            p.innerHTML = object.id;
            document.body.appendChild(p);
            console.log(object);
    }).catch(function (error) {
        let p = document.createElement('p');
            p.innerHTML = error.message;
            document.body.appendChild(p);
            alert("Bad things!");
            console.log(error.message);
    });
}

