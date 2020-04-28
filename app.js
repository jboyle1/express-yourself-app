// 001-Import the express library
const express = require('express');

// 002-Instantiate the app
const app = express();

// 003-Listen to specific server
const PORT = process.env.PORT || 3000;

// Use static server to serve the Express Yourself website
app.use(express.static('public'));


// 004-Invoke the app's '.listen()' method
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


