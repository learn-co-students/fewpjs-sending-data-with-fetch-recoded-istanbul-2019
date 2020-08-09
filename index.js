// Add your code here

  function submitData(name, email) {
      let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },

      body: JSON.stringify({
          name: name,
          email: email
      })
  }

  return fetch("http://localhost:3000/users", config)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    document.body.append(object.id);
  })
  .catch(function(error) {
      alert("Bad things!");
      document.body.append(error.message);
    });

  };
   

