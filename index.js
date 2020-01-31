// Add your code here
/**
 * 
let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};
 
let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
 
fetch("http://localhost:3000/dogs", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });
 */

 function submitData(name, mail){
     let formData = {
        name : name,
        email: mail
     }

     let configObj = {
         method: 'POST',
         headers: {
             'Content-Type' : 'application/json',
             'Accept' : 'application/json'
         },
         body: JSON.stringify(formData)
     }

    return fetch('http://localhost:3000/users', configObj)
    .then(function(reps){
        return reps.json();
    })
    .then(function(object){
        document.body.innerHTML = object.id;
    })
    .catch(function(error){
        document.body.innerHTML = error.message;
    });
    
    //json-server --watch db.json
 }

//  document.querySelector('#submit').addEventListener('click', function(){
//      let name = document.querySelector('#name').value;
//      let email = document.querySelector('#email').value;

//      submitData(name,email);
//  })

