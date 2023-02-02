require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const serveStatic = require('serve-static');

// Connect to MongoDB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Serve static files
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(express.json());

// Routes
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
