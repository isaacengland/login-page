require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Routes
const viewsRouter = require('./routes/views.js');
app.use('/', viewsRouter);

const usersRouter = require('./routes/users.js');
app.use('/users', usersRouter);

// Listen on port
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
