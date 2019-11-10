const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const bac = require("./bac.js")

const app = express();
app.get("/", (req, res) => {
    res.json("Hello World");
})

app.get("/beer", (req, res) => {
    // res.json({success: true, msg: "we did it"})
    bac.another_shot_pls();
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));