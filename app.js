const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const filmRouter = require('./routes/api/films');

const app = express();

// Connect DB
connectDB();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

app.use(cors());
app.use(
    cors({
      origin: [
        "http://localhost:3000",
      ],
      credentials: true,
    })
  );
  
app.use(express.json());

app.use('/api', filmRouter);