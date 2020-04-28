// Import the express library
const express = require('express');

// Instantiate the app
const app = express();

// Listen to specific server
const PORT = process.env.PORT || 3000;

// Invoke the app's '.listen()' method
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


