const express = require ("express");
const path = require("node:path")
const app = express ();
const port = 3030;

const publicPath = path.resolve(__dirname, './Public');

app.use(express.static ("./Public"));

app.listen(port, () => console.log ("servidor corriendo en puerto:"+port));

app.get("/", (req, res)=> {
    res. sendFile(path.resolve('./View/home.html'))
}); 

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('View/register.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('View/login.html'));
});

