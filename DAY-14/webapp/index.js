const express = require('express');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());  //middleware to parse JSON data from request body
app.use(express.urlencoded({ extended: true }));  //middleware to parse URL-encoded data from request body
app.use(express.static('public'));  //middleware to serve static files

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html")); //sends index.html to the client
});

app.get('/login', async (req, res) => {
    res.sendFile(path.join(__dirname, "public/login.html")); //sends login.html to the client
});

app.post('/loginwithcreds', (req, res) => {
    const { username, password } = req.body; //extracts username and password from the request body
    
    // Validation Logic
    if(username.length <= 3 || password.length <= 5) {
        res.send("Username length must be greater than 3 & Password 5");
    } else if (username === "admin123" && password === "admin123") {
        res.send("Login successful");
    } else {
        res.status(401).send("Invalid credentials");
    }
});

app.listen(PORT, () => console.log(`App started on PORT:${PORT}`));