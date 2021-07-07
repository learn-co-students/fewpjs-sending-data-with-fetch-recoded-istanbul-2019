
function submitData(a, b){

    let data =  {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
        body: JSON.stringify({
         name: a,
         email: b 
        })
      }
  
      return fetch("http://localhost:3000/users", data)
    .then(function(response) {
        return response.json();
      })
    .then(function(object) {
        let newElemmet = document.createElement("p");
        newElemmet.innerHTML= object.id;
        document.querySelector("body").appendChild(newElemmet);

      })
    .catch(dara => {
        let newEl2 = document.createElement("p");
        newEl2.innerHTML= dara.message;
        document.querySelector("body").appendChild(newEl2);
    }
 )
 
}

// submitData("myName", "myEmail");


   