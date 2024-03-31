import express from "express";
import notes from "./data/notes.js";
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("API is running");
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});
