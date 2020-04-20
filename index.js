//const { object } = require("chai-spies");

function submitData(name, email) {

    let formData = {
        name: name,
        email: email
    }

    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', configObject)
    .then(function(response) {
        return response.json();
      })
    .then(json => {
        document.body.append(json.id)
    })
    .catch(function(error){
        document.body.append(error.message)
    });
}






// fetch("http://localhost:3000/dogs", configObject)
// .then(response => response.json())
// .then(object => {
//     console.log(object);
// })
// .catch(function(error){
// alert("Error accured! Check console for details.");
// console.log(error.message);
// })