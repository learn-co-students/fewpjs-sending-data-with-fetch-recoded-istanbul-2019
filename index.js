// Add your code here
function submitData(name,email){
    let formData = {
        name: name,
        email: email
      };
       
      // method: "POST" is missing from the object below
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };       
      return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          document.write(object.id);
        })
        .catch(function(error) {
          alert("Bad things! Ragnarők!");
          document.write(error.message);
        });
}