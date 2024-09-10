//age income risk tolerance year of investment experience
const express = require('express');

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Welcome to Tehalka Omlette!")
})