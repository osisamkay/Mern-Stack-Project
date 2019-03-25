const express = require('express');
const mongoose = require('mongoose');
const app = express();

const user = require('./routes/api/user');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');

// DB Config
const db = require('./config/keys').mongodbURI;

// connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Mongo DB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send(`hello port`));

// use routes
app.use('/api/user', user);
app.use('/api/profile', profile);
app.use('/api/post', post);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));