const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Frontend server is running");
})

app.listen(3000, () => {
    console.log("Frontend server is running on port 3000");
})