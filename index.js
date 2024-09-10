//age income risk tolerance year of investment experience
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Welcome to Tehalka Omlette!")
})

app.listen(PORT, () => {
    console.log("Server running on PORT:", PORT);
})