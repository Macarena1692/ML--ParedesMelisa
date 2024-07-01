const express = require("express");
const path = require("node:path");
const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const publicPath = path.resolve(__dirname, './Public');
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, './View/home.html'));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, './View/register.html'));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, './View/login.html'));
});


