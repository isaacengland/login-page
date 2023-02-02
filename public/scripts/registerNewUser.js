class User {
	constructor(username, password) {
		(this.username = username), (this.password = password);
	}
}

export const registerNewUser = (username, password) => {
	fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(new User(username, password)),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		});
};
