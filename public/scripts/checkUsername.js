export const checkUsername = (username) => {
	fetch(`http://localhost:3000/users/search/${username}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((response) => {
		return response.json();
	});
};
