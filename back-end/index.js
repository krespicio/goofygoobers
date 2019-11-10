const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const bac = require("./bac.js")

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json("Hello World");
})

// app.get("/beer", (req, res) => {
//     // res.json({success: true, msg: "we did it"})
//     //req.body.age
//     res.send(bac.another_shot_pls());
// })

app.post("/getBac", (req,res) => {
    //console.log(bac.calculate_BAC(req.body.numberOfDrinks, req.body.weight, req.body.gender, req.body.hours));
    let cab = {bac: bac.calculate_BAC(req.body.numberOfDrinks, req.body.weight, req.body.gender, req.body.hours)};
    // res.json({hdsajfhl: fdsfhad})
    res.json(cab);
})

app.post("/getLegalTime", (req,res) => {
    let cab = {bac: bac.time_until_legal(req.body.numberOfDrinks, req.body.weight, req.body.gender, req.body.hours)};
    res.json(cab);
})

app.post("/getAnotherShot", (req,res) => {
    let cab = {bac: bac.another_shot_pls(req.body.numberOfDrinks, req.body.weight, req.body.gender, req.body.hours)};
    res.json(cab);
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));