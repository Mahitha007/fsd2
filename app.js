const express = require("express");

const app = express();

const port = 3000;

app.get('/', (req, res) => {

    res.send("Hello World! This is the first page.");

});

app.get('/about', (req, res) => {

    res.send("About Page. This is the about page.");

});

app.get('/api/status', (req, res) => {

    res.json({

        active: true,

        version: "1.0.0",

        message: "The server is responding"

    });

});
app.get('/', (req, res) => {
    res.send("Welcome to the REST API");
});

app.listen(port, () => {

    console.log(`Success! Server is running at http://localhost:${port}`);

    console.log("Press Ctrl + C to stop the server");

});