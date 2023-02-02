export const checkCredentials = (username, password) => {
	const usernameInput = document.getElementById('username-input').value;
	const passwordInput = document.getElementById('password-input').value;
	if (usernameInput === username && passwordInput === password) {
		return true;
	} else {
		return false;
	}
};
