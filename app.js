// 001 - Import the express library.
const express = require('express');

// 002 - Instantiate the app.
const app = express();

// 003 - Listen to specific server.
const PORT = process.env.PORT || 3000;

// 005 - Use static server to serve the Express Yourself website.
app.use(express.static('public'));

// 007 - Require getElementsById and seedElements functions from './utils'.
const { getElementById, getIndexById, updateElement, seedElements, createElement } = require('./utils');

// 008 - Create empty expressions array.
const expressions = [];

// 009 - Invoke seedElements function with expressions (array) and 'expressions' (string) as arguments.
seedElements(expressions, 'expressions');

// 006 - Open a call to 'app.get()'.
app.get('/expressions', (req, res, next) => {
    // 010-To allow server to respond use 'res.send()' to send back the expressions.
    res.send(expressions)
});

// 011 - Create a GET /expression/id get route to send back a single expression using 'req.params' and the pre written helper function 'getElementById(id, array).
app.get('/expressions/:id', (req, res, next) => {
    const foundExpression = getElementById(req.params.id,expressions);
    // 012 - Allow for invalid requests using an if else conditional statement.
    if (foundExpression) {
        res.send(foundExpression);
    } else {
        res.status(404).send();
    }
});

// 013 - Open a PUT /expression/;id put route handler.
app.put('/expressions/:id', (res, req, next) => {
    const expressionIndex = getElementById(req.params.id, expressions);
     // 014 - Use req.query to update the proper element in the expressions array and allow for invalid requests using an if else conditional statement.
    if (expressionIndex !== -1) {
        updateElement(req.params.id, req.query, expressions);
        res.send(expressions[expressionsIndex]);
    } else {
        res.status(404).send();
    }
});

// 015 - Create a POST /expressions route handler that sends, creates and adds a new expression to the expressions array if it is a valid new expression (meaning it has an emoji and name key). It should send back the new element with a 201 status code if it is valid, and it should send a 400 status code if the object is not valid.
app.post('/expressions', (req, res, next) => {
    const receivedExpression = createElement('expressions', req.query);
    if (receivedExpression) {
        expressions.push(receivedExpression);
        res.status(201).send(receivedExpression);
    } else {
        res.status(400).send();
    }
});

// 016 - Create a DELETE /expressions/:id route handler. It should send back a 404 response for a request with an invalid id, and it should delete the proper element from the expressions array and send a 204 status with a valid id.
app.delete('/expressions/:id', (req, res, next) => {
    const expressionIndex = getIndexById(req.params.id, expressions);
    if (expressionIndex !== -1) {
        expressions.splice(expressionIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

// 017 - Add additional functionality by creating Animal Mode. Add a GET /animals route handler to return an array of all animals.
app.get('/animals', (req, res, next) => {
    res.send(animals);
})

// 018 - Create a GET /animals/:id route to respond with a single animal.
app.get('/animals/:id', (req, res, next) => {
    const animal = getElementById(req.params.id, animals);
    if (animal) {
        res.send(animal);
    } else {
        res.status(404).send();
    }
});

// 019 - Create a PUT /animals/:id route to update an animal in animals and send back the updated animal.
app.put('/animals/:id', (req, res, next) => {
    const animalIndex = getIndexById(req.params.id, animals);
    if (animalIndex !== -1) {
        updateElement(req.params.id, req.query, animals);
        res.send(animals[animalIndex]);
    } else {
        res.status(404).send();
    }
});

// 020 - Create a POST /animals route to add new animals to the animals and respond with the new animal.
app.post('/animals', (req, res, next) => {
    const receivedAnimal = createElement('animals', req.query);
    if (receivedAnimal) {
        animals.push(receivedAnimal);
        res.status(201).send(receivedAnimal);
    } else {
        res.status(400).send();
    }
});

// 021 - Create a DELETE /animals/:id route to delete animals by ID.
app.delete('/animals/:id', (req, res, next) => {
    const animalIndex = getIndexById(req.params.id, animals);
    if (animalIndex !== -1) {
        animals.splice(animalIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

// 004 - Invoke the app's '.listen()' method.
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


