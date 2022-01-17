const connectToMongo = require('./dbConnect');
const express = require('express');
const app = express();

app.use(express.json());

connectToMongo();

app.use('/api', require('./routes/info'));

app.get('/', (req, res) => res.send("Welcome To API Home"));

app.listen(4000, () => console.log("App Is Listening on Port 4000"))