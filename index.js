// Add your code here
function submitData (){
    let formData = {
        name: "Steve",
        email: "steve@steve.com"
      };
       
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
       
      return fetch("http://localhost:3000/users", configObj)
        .then( response => response.json())
        .then( data => {
            let userInfo = document.createElement('p')
            userInfo.innerHTML = data.id
            document.body.append(userInfo)
          console.log(data);
        })

        .catch( showError => {
            let displayError = document.createElement('p');
            displayError.innerHTML = showError.message;
            document.body.append(displayError);
            console.log(showError.message)
        
        })

        
}

