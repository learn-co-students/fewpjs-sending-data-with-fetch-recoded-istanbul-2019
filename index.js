
  function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(response => response.json())
        .then(obj => {
          let objEl = document.createElement("p");
          objEl.innerHTML = obj.id;
          document.body.appendChild(objEl);
      })
      .catch(error => {
        let objEl = document.createElement("p");
        objEl.innerHTML = error.message;
        document.body.appendChild(objEl);
        alert("something's wrong");
        console.log(error.message)
      });
}