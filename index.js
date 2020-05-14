// Add your code here
function submitData (userName,eMail){
    let formData = {
        name: userName,
        email: eMail
    };

    let configObj ={
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
                .then(resp => resp.json())
                .then(object =>{
                    let id = document.createElement('h1');
                    id.innerHTML= object.id;
                    document.querySelector('body').appendChild(id);
                }).catch(error =>{
                    let errorMsg = document.createElement('h1');
                    errorMsg.innerHTML= error.message;
                    document.querySelector('body').appendChild(errorMsg);
                   
                });
}