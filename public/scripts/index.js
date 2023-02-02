import { checkCredentials } from './checkCredentials.js';

const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	fetch('http://localhost:3000/users', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			data.forEach((user) => {
				if (checkCredentials(user.username, user.password)) {
					console.log('User found!');
				} else {
					console.log('User not found!');
				}
			});
		});
});

const signUp = document.getElementById('sign-up-btn');
signUp.addEventListener('click', (e) => {
	//serve signup page
});
