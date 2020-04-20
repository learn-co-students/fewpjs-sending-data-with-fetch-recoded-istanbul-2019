// Add your code here
function submitData(name , email){
    let Data = {
        name:name,
        email:email
    }
    
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(Data)
      };
     
    return fetch("http://localhost:3000/users", configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        let heading = document.createElement('h1');
        heading.innerHTML = object.id;
        document.querySelector('body').append(heading);
      }) 
      .catch(function(error) {
        let heading = document.createElement('h1');
        heading.innerHTML = error.message;
        document.querySelector('body').append(heading);
      });
}

submitData();