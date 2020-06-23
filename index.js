// Add your code here

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })


    .then(response => response.json())
    .then(obj => {
        let object = document.createElement("h1");
        object.innerHTML = obj.id;
        document.body.appendChild(object);
    })

    .catch(error => {
        let object = document.createElement("h1");
        object.innerHTML = error.message;
        document.body.appendChild(object);
        alert("Bad things! Ragnarők!");
        console.log(error.message);




    })



}