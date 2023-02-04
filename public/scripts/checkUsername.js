export const checkUsername = async (username) => {
	const response = await fetch(
		`http://localhost:3000/users/search/${username}`
	);
	const data = await response.json();
	return data;
};
