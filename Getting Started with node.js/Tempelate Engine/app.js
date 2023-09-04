// Do not capitalize 'E' of express when installing the package otherwise it will install version 3.0.1
'strict mode'
/*const express = require("express");
const { hostname } = require("os");
const path = require("path")

let app = express();
let port = 3000;

// setting tempelate engine as pug
app.set('view engine', 'pug')

//set the views directory
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + "/static"));

app.get('/', (req, res) => {
    // searches in the views directory
    res.status(200).render('index', { title: 'Hey', message: 'Hello there!' })
})


// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });


app.listen(port, () => {
    console.log(`Server started at ${hostname}:${port}`);
})
*/

const express = require("express");
const { hostname } = require("os");
const path = require("path");
const fs = require("fs");
const { check, validationResult } = require('express-validator')

let app = express();
const port = 80;

let response_no = 0;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname + '/views'))
app.use(express.static(path.join(__dirname, "./static")))

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
    
    let csv = '';
    response.timestamp = new Date();
    let keys = Object.keys(response)
    let keysCounter = 0;
    let keysAmount = keys.length;

    if(response_no === 0){
        keys.forEach((key)  => {
            csv += key + (keysCounter+1 < keysAmount ? ',' : '\r\n' )
            keysCounter++
        });
        keysCounter = 0;
        keys.forEach((key)  => {
            csv += response[key] + (keysCounter+1 < keysAmount ? ',' : '\r\n' )
            keysCounter++
        });
    }else{
        keys.forEach((key)  => {
           csv += response[key] + (keysCounter+1 < keysAmount ? ',' : '\r\n' )
           keysCounter++
        });
    }
    response_no++;
    fs.appendFileSync("./response.csv", csv);

    params.formStatus = "Your form has been submitted successfully";
    
    // PRG Awesomeness
    res.redirect("/signup");
})

app.listen(port, ()=>{
    console.log(`Started listening at localhost:${port}`);
})




