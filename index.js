// Add your code here
function submitData(name, email) {
    let formData = {
        'name': name,
        'email': email
    };

    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    };
    
    return fetch('http://localhost:3000/users', configObj)
        .then(function(respose) {
            return respose.json();
        })
        .then(function(object) {
            console.log(object);
            const text = document.createElement('p');
            text.textContent = object.id;
            document.body.append(text);
        })
        .catch(function(error) {
            console.log(error.message);
            alert('Bad command!');
            const text = document.createElement('p');
            text.textContent = error.message;
            document.body.append(text);
        });
}

done();