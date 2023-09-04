// You cannot keep using Live Server forever!

const http = require("http");
const fs = require("fs");

var mimeTypes = {
    'js' : 'text/javascript',
    'html' : 'text/html',
    'css' : 'text/css',
    'jpg' : 'image/text',
    'gif' : 'image/gif'
  };

const server = http.createServer((req, res) => {
    // HTTP Headers: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
    console.log(req.url);
    if(req.url == "/")
        req.url = "/index.html";
    let ext = req.url.match("\\.[\\w]+")[0];
    ext = ext.substring(1, ext.length);
    // const fileContent = fs.readFileSync(__dirname + "/Getting Started with JS" + req.url);
    // Do not use readfilesync cuz it sucks at handling errors and just throws exception. You can only handle it using the try, catch statement.
    fs.readFile(__dirname + "/Getting Started with JS" + req.url, {encoding: "utf-8"}, (err, data) => {
        let fileContent;
        if(err == null){
            // TODO: FIX IMAGE FILES
            res.writeHead(200, {'Content-Type': mimeTypes[ext]}); 
            fileContent = data;
        }
        else{
            console.log("File Not Found");
            console.log(err);
            res.writeHead(404, {'Content-Type': 'text/html'});
            fileContent = fs.readFileSync(__dirname + "/Getting Started with JS/Error.html", {encoding: "utf-8"});
        }
        res.write(fileContent);
        res.end();
    })

})
// backlog:	Optional. Specifies the max length of the queue of pending connections. Default 511

server.listen(80, '127.0.0.1', /*backlog*/ () => {
    // Executes when listener has been added.
    console.log("Server Listening at port 80");
}) //browsers go to port 80 by default

