// 001-Import the express library
const express = require('express');

// 002-Instantiate the app
const app = express();

// 003-Listen to specific server
const PORT = process.env.PORT || 3000;

// 005-Use static server to serve the Express Yourself website
app.use(express.static('public'));

// 007-Require getElementsById and seedElements functions from './utils'
const { getElementById, getIndexById, updateElement, seedElements } = require('./utils');

// 008-Create empty expressions array
const expressions = [];

// 009-Invoke seedElements function with expressions (array) and 'expressions' (string) as arguments.
seedElements(expressions, 'expressions');

// 006-Open a call to 'app.get()'
app.get('/expressions', (req, res, next) => {
    // 010-To allow server to respond use 'res.send()' to send back the expressions
    res.send(expressions)
});

// 011-Create a GET /expression/id get route to send back a single expression using 'req.params' and the pre written helper function 'getElementById(id, array).
app.get('/expressions/:id', (req, res, next) => {
    const foundExpression = getElementById(req.params.id,expressions);
    // 012-Allow for invalid requests using an if else conditional statement
    if (foundExpression) {
        res.send(foundExpression);
    } else {
        res.status(404).send();
    }
});

// 013-Open a PUT /expression/;id put route handler
app.put('/expressions/:id', (res, req, next) => {

});

// 004-Invoke the app's '.listen()' method
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


