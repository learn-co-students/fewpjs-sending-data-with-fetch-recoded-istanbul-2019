// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

function submitData(User, Email) {
    let formData = {
        name: User,
        email: Email
    }
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    
    };
    return fetch('http://localhost:3000/users', configObj)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        let resId = document.createElement('h1');
        resId.innerHTML = object.id
        document.querySelector('body').appendChild(resId);

    })
    .catch(function(error){
        let errMesg = document.createElement('h2');
        errMesg.innerHTML = error.message;
        document.querySelector('body').appendChild(errMesg);
    });


}

