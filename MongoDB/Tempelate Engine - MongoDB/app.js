'strict mode'
// This one use mongoose to save the data into a mongodb database

const express = require("express");
const mongoose = require("mongoose");
const { hostname } = require("os");
const path = require("path");
const fs = require("fs");
const { check, validationResult } = require('express-validator');
const { timeStamp } = require("console");

let app = express();
const port = 80;

let response_no = 0;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname + '/views'))
app.use(express.static(path.join(__dirname, "./static")))


// Mongoose quick start: https://mongoosejs.com/docs/index.html

// async function
mongoose.connect('mongodb://127.0.0.1:27017/test');
var db = mongoose.connection;
db.on('error', ()=>{
    console.log("ERROR: FAILED TO CONNECT TO THE DATABASE");
    process.exit(1);
});
db.once('open', ()=>{
    console.log("SUCCESS: CONNECTED TO THE DATABASE");
});

const responseSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    more: String,
    gender: String,
    timestamp: Date
});

// compiling the schema into a |class?|. We create instances of this Response as our documents
const Response = mongoose.model('response', responseSchema);

// Get data from post
app.use(express.urlencoded());

let params = {
    'title': 'Placeholder',
    'companyName': 'Logo',
    'Top_Heading': "Sign Up For Your Free Membership Now!",
    'formStatus': ''
}
app.get("/", (req, res)=>{
    res.status(200).render("home.pug", params)
})

app.get("/signup", (req, res)=>{
    res.status(200).render("signup.pug", params)
})

app.post("/signup", [
    check('name', 'Bad Name')
        .exists()
        .notEmpty()
        .isLength({max: 50 })
        .trim()
        .matches("^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$", ),
    check('email', 'Bad Email')
        .exists()
        .notEmpty()
        .isEmail()
        .normalizeEmail()
        .isLength({max: 320 }),
    check('age', "Bad Age")
        .exists()
        .notEmpty()
        .isNumeric()
        .isInt({min: 13, max: 250}),
    check('gender', "Bad Gender")
        .exists()
        .notEmpty()
        .isIn(["male", "female"]),
    check('more', "Too Long")
        .exists()
        .isLength({max: 3000})
], 
(req, res)=>{
    console.log("Got a put request:");
    console.log(req.body);

    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array())
    }
    let response = req.body;
    response.timestamp = new Date();

    response = new Response(response);
    response.save();
    // let csv = '';
    // response.timestamp = new Date();
    // let keys = Object.keys(response)
    // let keysCounter = 0;
    // let keysAmount = keys.length;

    // if(response_no === 0){
    //     keys.forEach((key)  => {
    //         csv += key + (keysCounter+1 < keysAmount ? ',' : '\r\n' )
    //         keysCounter++
    //     });
    //     keysCounter = 0;
    //     keys.forEach((key)  => {
    //         csv += response[key] + (keysCounter+1 < keysAmount ? ',' : '\r\n' )
    //         keysCounter++
    //     });
    // }else{
    //     keys.forEach((key)  => {
    //        csv += response[key] + (keysCounter+1 < keysAmount ? ',' : '\r\n' )
    //        keysCounter++
    //     });
    // }
    // response_no++;
    // fs.appendFileSync("./response.csv", csv);
    // PRG Awesomeness
    res.redirect("/signup");
})

app.listen(port, ()=>{
    console.log(`Started listening at localhost:${port}`);
})





