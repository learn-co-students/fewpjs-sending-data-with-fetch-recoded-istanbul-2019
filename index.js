function submitData(name, email) {
    let postInfo = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };

    return fetch("http://localhost:3000/users", postInfo)
        .then(response => response.json())
        .then(result => {
            let newP = document.createElement('p');
            newP.innerHTML = result.id;
            document.getElementsByTagName("body").appendChild(newP);
        })
        .catch(error => {
            let newE = document.createElement('p');
            newE.innerHTML = error.message;
            document.getElementsByTagName("body").appendChild(newE);
        })
}