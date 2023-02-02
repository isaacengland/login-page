import { checkUsername } from './checkUsername.js';
import { registerNewUser } from './registerNewUser.js';

const form = document.getElementById('register-form');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const confirmPasswordInput = document.getElementById('confirm-password-input');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = usernameInput.value;
	const password = passwordInput.value;
	const confirmPassword = confirmPasswordInput.value;

	if (password === confirmPassword) {
		if (password.length >= 8) {
			// console.log(checkUsername(username));
			try {
				registerNewUser(username, password);
				setTimeout(() => {
					window.location.href = 'http://localhost:3000/login';
				}, 1000);
			} catch (error) {
				console.log(error);
			}
		} else {
			alert('Password must be at least 8 characters');
		}
	} else {
		alert('Passwords do not match');
	}
});
