const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get all users
router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Get one user
router.get('/:id', getUser, async (req, res) => {
	try {
		const user = await User.find(id);
		res.json(user);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//search for a user by username
router.get('/search/:username', async (req, res) => {
	try {
		const user = await User.find({ username: req.params.username });
		res.json(user);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Add a user
router.post('/', async (req, res) => {
	const user = new User({
		username: req.body.username,
		password: req.body.password,
	});
	try {
		const newUser = await user.save();
		res.status(201).json(newUser);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

// Delete a user
router.delete('/:id', getUser, async (req, res) => {
	try {
		await res.user.remove();
		res.json({ message: 'Removed user' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//Middleware
async function getUser(req, res, next) {
	try {
		user = await User.findById(req.params.id);
		if (user == null) {
			return res.status(404).json({ message: 'User not found ' });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
	res.user = user;
	next();
}

module.exports = router;
