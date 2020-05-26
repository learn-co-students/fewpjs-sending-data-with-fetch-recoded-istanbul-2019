function submitData(name, email) {
	let userData = {
		name: name,
		email: email,
	};

	let configObj = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(userData),
	};
	return fetch('http://localhost:3000/users', configObj)
		.then(function (response) {
			return response.json();
		})
		.then(function (object) {
			console.log(object.id);
			let idP = document.createElement('p');
			idP.innerHTML = `the User ID is: ${object.id}`;
			let body = document.getElementsByTagName('body')[0];
			body.appendChild(idP);
		})
		.catch(function (error) {
			alert('Bad things! Ragnarők!');
			console.log(error.message);
			let errorP = document.createElement('p');
			errorP.innerHTML = `Oh, you have an error: ${error.message}`;
			let body = document.getElementsByTagName('body')[0];
			body.appendChild(errorP);
		});
}
