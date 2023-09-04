// Express. js is the most popular backend framework for Node. js, and it is an extensive part of the JavaScript ecosystem. It is designed to build single-page, multi-page, and hybrid web applications, it has also become the standard for developing backend applications with Node
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

// Get data from post
app.use(express.urlencoded());

//express handles each get request using seperate callbacks


// mongoose setup
mongoose.connect('mongodb://127.0.0.1:27017/Foodholics');

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String
});

const ContactResponse = new mongoose.model('Contact Responses', contactSchema);

// You can respond to requests with a file using the res.sendFile(path) method. You can put it inside the app.get('/', ...) route handler. Behind the scenes, this method will set the appropriate headers to instruct your browser on how to handle the file you want to send, according to its type. Then it will read and send the file. This method needs an absolute file path. We recommend you to use the Node global variable __dirname to calculate the path like this:
app.get('/', (req, res) => {  //get request
    res.sendFile(__dirname + "/public/views/index.html");
})

app.get('/index', (req, res) => {  //get request
    res.sendFile(__dirname + "/public/views/index.html");
})
//Use this to serve static files contained within the public folder.

app.get('/order', (req, res) => {
    res.sendFile(__dirname + "/public/views/Order.html");
})

app.post('/contact-form', (req, res) => {
    // console.log(req.body);

    const contactResponse = new ContactResponse(req.body);
    contactResponse.save();

    res.status(302).redirect("/");
})

app.listen(port, () => {
    console.log(`listeneing at port ${port}`);
})

/* alternative code without express.js 

const http = require("http");

cosnt server = http.createServer((req, res)=>{
    // res.writeHead({"Content-Type": "text/html");
    res.end("Hello World!");
})

server.listen(port, '127.0.0.1', ()=>{
    console.log(`listeneing at port ${port}`);
})
*/

app.get('*', function (req, res) {
    res.status(404).sendFile(__dirname + '/public/views/Error.html');
});