let destinationURL = "http://localhost:3000/users";
let configurationObject={
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      body:`{
        name:"Steve",
        email:"steve@steve.com"
      }`
    }
  }
  
  
function submitData(name,email){
  fetch(destinationURL,configurationObject).then(function(response){
    return response.json();
  }).then(function(obj){
    console.log(obj);
  }).catch(function(error){
    console.log(error.message)
  })
}