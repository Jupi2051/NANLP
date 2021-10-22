const PORT = 25565;
const express = require("express");
const app = express();

app.listen(PORT, function()
{
    console.log("Listening on " + PORT);
});

app.get("/", function(req, res)
{
    res.send("owah");
});