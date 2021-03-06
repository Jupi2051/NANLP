const API_KEY = "21cd69ee25f06146a18b8720a492bba5";

const PORT = 25565;
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const FormData = require("form-data");
app.use(express.static("./dist"));
app.use(bodyParser());
app.use(cors());
const request = require("request");

app.listen(PORT, function()
{
    console.log("Listening on " + PORT);
});

app.get("/", function(req, res)
{
    res.sendFile("dist/index.html");
});

app.get("/service-worker.js", function(req, res)
{
    res.sendFile(__dirname + "/service-worker.js");
});

app.post("/Evaluate", function(req, MainResponse)
{
    articleURL = req.body.article;
    let formdata = new FormData();
    if (!API_KEY)
    {
        MainResponse.sendStatus(403) // means API key is missing
        return;
    }
    formdata.append("key", API_KEY);
    formdata.append("txt", articleURL);
    formdata.append("lang", "en");

    formdata.submit("https://api.meaningcloud.com/sentiment-2.1", function(err, res)
    {
        let body = "";
        res.on("data", (chunk) =>{body += chunk;});

        res.on("end", function()
        {
            MainResponse.send(new Buffer.from(body).toString());
        })
    });
});