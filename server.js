require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const routes = require('./routes');
// const constants = require('./constants');

const corsOptions = {
    // origin: ['http://localhost:3000'],
    origin: ['https://musicianbook-project4.herokuapp.com'],  /// comment out until wanting to see deployed front end.
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions))
app.use(bodyParser.json());




//SET THIS UP for Routes
// app.use('/auth', routes.auth);
   app.use('/session', routes.session);
   app.use('/user', routes.user);
   app.use('/band', routes.band);
// app.use('/post', verifyToken, routes.post);


app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})
