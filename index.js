// Add your code here

function submitData(name, email){
    let user = {
    name: name,
    email: email
  };
  
  let configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  };
  
  return fetch("http://localhost:3000/users", configurationObject)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    document.body.append(object.id);
  })
  .catch(function(error) {
    document.body.append(error.message)
  });

}