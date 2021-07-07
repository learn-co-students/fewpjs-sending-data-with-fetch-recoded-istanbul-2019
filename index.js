function submitData(name,email){
return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: name,
    email: email
  })
}) .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let x;
    for (x in object) {
  document.body.innerHTML+= object[x] + "<br>";
}

    //console.log(object);
  }).catch(function(error) {
    //alert("Bad things! Ragnarők!");
    document.body.innerHTML=error.message;
  });
      
    }
    
    
//first 
let name = "Steve"
let email = "steve@steve.com"
submitData(name,email);
  
//second    
name = "Sam"
email = "sam@sam.com" 
submitData(name,email);

//third
name = "Jim"
email = "jim@jim.com"
submitData(name,email);