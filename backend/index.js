const connectToMongo = require('./dbConnect');
const express = require('express');
const app = express();
const infoRoutes = require('./routes/info')
app.use(express.json());

 connectToMongo();

 app.use('/api/info',infoRoutes);

app.get('/', (req, res) => res.send("Welcome To API Home"));

app.listen(4000, () => console.log("App is listening on port 4000"))