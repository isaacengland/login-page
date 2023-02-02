const express = require('express');
const router = express.Router();
const path = require('path');

//Login Page
router.get('/login', (req, res, next) => {
	res.sendFile('login.html', {
		root: path.join(__dirname, '../public/views'),
	});
});

//Sign Up Page
router.get('/register', (req, res, next) => {
	res.sendFile('register.html', {
		root: path.join(__dirname, '../public/views'),
	});
});

module.exports = router;
