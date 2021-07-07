// Add your code here
function submitData(name,email){
let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name ,
    email
  })
};

return fetch("http://localhost:3000/users", configObj)
.then(resp => resp.json())
.then(data => document.querySelector('span').textContent = data.id)
.catch(err => document.querySelector('span').textContent = err );
}
