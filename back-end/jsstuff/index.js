const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();
app.get("/", (req, res) => {
    res.send("Hello World");
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));