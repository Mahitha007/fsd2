const express = require('express');

const app = express();

const PORT = 3000;

// Home Route
app.get('/', (req, res) => {
    res.send("Welcome to the Dynamic Routing API");
});

// Route Parameters
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;

    res.send(`User profile: This is the user profile page for user with id: ${userId}`);
});

// Multiple Route Parameters
app.get('/flights/:from/:to', (req, res) => {
    const { from, to } = req.params;

    res.send(`Searching for flights departing from ${from} arriving at ${to}.`);
});

// Query Parameters
app.get('/search', (req, res) => {
    const category = req.query.category;
    const sort = req.query.sort;

    res.json({
        message: "Search Results",
        filteringBy: category || "None",
        sortingBy: sort || "Default"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});