function submitData(name,email){

let formData = {
    name: 'Steve',
    email: 'steve@steve.com'
  };
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  return fetch('http://localhost:3000/users', configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let p=document.createElement('p');
    p.innerHTML=object.id;
    document.body.appendChild(p);
    console.log(object);
  })
  .catch(function (error) {
      let p=document.createElement('p');
      p.innerHTML =error.message;
      document.body.appendChild(p);
    console.log('Request failed', error);
  });

}