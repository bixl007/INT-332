const express = require('express');
const mongoose = require('mongoose');

const app = express();

const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("connected");
    } catch (err) {
        console.error("failed");
    }
}

connectDB();

app.get('/', (req, res) => {
    res.send("Hey there");
});

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});