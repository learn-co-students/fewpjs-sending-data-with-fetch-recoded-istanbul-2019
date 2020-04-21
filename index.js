import { create } from "domain";
// Add your code here
function submitData(name, email){
  let configObj ={
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

  return fetch("http://localhost:3000/users", configObj)
  .then(function(response){
    return response.json();
  })
  .then(function(obj){
    let newNode = document.createElement('p');
    newNode.innerHTML = obj.id;;
    document.querySelector("body").appendChild(newNode);
  })
  .catch(function(error) {
    let newNode = document.createElement('p');
    newNode.innerHTML = error.message;
    document.querySelector("body").appendChild(newNode);
  });

}
