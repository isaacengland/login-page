import { verifyCredentials } from './verifyCredentials.js';

const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');

const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
	e.preventDefault();

	let formFilled = false;

	if (usernameInput.value && passwordInput.value) {
		formFilled = true;
	}
	if (!usernameInput.value) {
		usernameInput.style.color = 'rgb(221, 14, 14)';
		usernameInput.style.borderColor = 'rgb(221, 14, 14)';
		usernameInput.addEventListener('input', () => {
			usernameInput.style.color = 'black';
			usernameInput.style.borderColor = 'black';
		});
	}
	if (!passwordInput.value) {
		passwordInput.style.color = 'rgb(221, 14, 14)';
		passwordInput.style.borderColor = 'rgb(221, 14, 14)';
		passwordInput.addEventListener('input', () => {
			passwordInput.style.color = 'black';
			passwordInput.style.borderColor = 'black';
		});
	}

	if (formFilled) {
		fetch('http://localhost:3000/users', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				data.forEach((user) => {
					if (
						verifyCredentials(user.username, user.password) ||
						false
					) {
						document.getElementById('success-msg').style.display =
							'block';
						document.getElementById('error-msg').style.display =
							'none';
					} else {
						document.getElementById('error-msg').style.display =
							'block';
						document.getElementById('success-msg').style.display =
							'none';
					}
				});
			});
	}
});
