// Add your code here
function submitData(name, email) {

  let user = {
    name: name,
    email: email
  };

  let configurationObject  = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  };
  
  return fetch("http://localhost:3000/users", configurationObject )
      .then(response => response.json())
      .then(json => document.body.append(json.id))
      .catch(error => document.body.append(error.message))
}




