const PORT = 25565;
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const API_KEY = process.env.API_ID;
const app = express();

app.use(express.static("./dist"))

app.listen(PORT, function()
{
    console.log("Listening on " + PORT);
});

app.get("/", function(req, res)
{
    res.sendFile("dist/index.html");
});