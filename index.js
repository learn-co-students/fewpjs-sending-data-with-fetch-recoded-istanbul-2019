// Add your code here
const url = "http://localhost:3000/users";
const submitData = (userName, userEmail) => {
    let formData = {
        name: userName,
        email: userEmail
    };
    let config = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    };
    return fetch(url, config)
        .then(res => res.json())
        .then(json => document.body.append(json.id))
        .catch(error => document.body.append(error.message))
}