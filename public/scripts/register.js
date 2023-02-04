import { checkUsername } from './checkUsername.js';
import { registerNewUser } from './registerNewUser.js';

const form = document.getElementById('main-form');
const message = document.getElementById('message');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const confirmPasswordInput = document.getElementById('confirm-password-input');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = usernameInput.value;
	const password = passwordInput.value;
	const confirmPassword = confirmPasswordInput.value;

	if (username.trim() === '') {
		message.innerHTML = 'Username is required';
		message.classList.add('error-msg');
		message.classList.remove('success-msg');
		return;
	}
	if (password !== confirmPassword) {
		message.innerHTML = 'Passwords do not match';
		message.classList.add('error-msg');
		message.classList.remove('success-msg');
		return;
	}

	if (password.includes(' ')) {
		message.innerHTML = 'Password must not contain spaces';
		message.classList.add('error-msg');
		message.classList.remove('success-msg');
		return;
	}

	if (password.length < 8) {
		message.innerHTML = 'Password must be at least 8 characters';
		message.classList.add('error-msg');
		message.classList.remove('success-msg');
		return;
	}

	checkUsername(username).then((data) => {
		if (data.length === 0) {
			try {
				registerNewUser(username, password);
				message.innerHTML = 'Registration successful';
				message.classList.add('success-msg');
				message.classList.remove('error-msg');
				setTimeout(() => {
					window.location.href = 'http://localhost:3000/login';
				}, 1000);
			} catch (error) {
				console.log(error);
			}
		} else {
			message.innerHTML = 'Username is taken';
			message.classList.add('error-msg');
			message.classList.remove('success-msg');
		}
	});
});
