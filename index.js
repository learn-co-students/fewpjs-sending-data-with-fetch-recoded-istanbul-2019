// Add your code here
let submitData = {
    name: "Steve",
    email: "steve@steve.com"
  };
   
  let conf = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(submitData)
  };

  fetch("http://localhost:3000/users", conf)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    document.body.innerHTML = object[ "id" ]
  })
  .catch(function(error) {
    alert("Bad things!");
    document.body.innerHTML = error.message;
  });

