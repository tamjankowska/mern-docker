const express = require('express');
const connectDB = require('./config/db.js');

const app = express();

// Connect DB
connectDB();

const port = process.env.PORT || 8082;

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
