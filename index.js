const express = require('express')
const path = require('path');
const app = express()
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

require('./server/routes/contactMe')(app)
require('./server/routes/frontend')(app)


const PORT = process.env.PORT || 5000
app.listen(PORT)