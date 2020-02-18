// Add your code here
function submitData(){ 
    let user = {};
    user["name"]= 'Steve';
    user["email"]= 'steve@steve.com';
    // CONFIGURE OBJECT 
   let configObj = {
       method:"POST",
       headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
       },
       body: JSON.stringify(user),
     };
     return fetch("http://localhost:3000/users", configObj)
     .then(function(response) {
       return response.json();
     })
     .then(function(object) {
       let h = document.createElement('h2');
       h.innerHTML = object.id;
       document.body.appendChild(h);
       console.log(object);
     })
     .catch(function(error) {
       let h = document.createElement('h2');
       h.innerHTML = error.message;
       document.body.appendChild(h);   
     });
   }
   
   submitData();