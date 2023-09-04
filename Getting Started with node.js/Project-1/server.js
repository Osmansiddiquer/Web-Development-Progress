// MAKING CUSTOM BACKEND

// You cannot keep using Live Server forever!
//To restart the server automatically everytime some changes are made to the server file, use nodemon

/* NOTE: Nodemon will restart a Node application when file changes in a directory are detected.

Live-server on the other hand, will refresh your browser when changes are detected to any supported file types (e.g. HTML, JS, CSS). It also enables Ajax requests when you are working locally — these don't normally work with the file:// protocol.
*/

const http = require("http");
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 80;

var mimeTypes = {
    'js': 'text/javascript',
    'html': 'text/html',
    'css': 'text/css',
    'jpg': 'image/jpeg',
    'gif': 'image/gif',
    'png': 'image/png',
    'svg': 'image/svg+xml'
};
// TODO: Fix png, jpg

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url == "/")
        req.url = "/index.html";

    let ext = req.url.match("\\.[\\w]+");
    if (ext != null){
        ext = ext[0].substring(1, ext[0].length);
    }
    else{
        ext = "html";
        req.url += "." + ext;
    }

    fs.readFile(__dirname + "/App" + req.url, { encoding: "utf-8" }, (err, data) => {
        let fileContent;
        if (err == null) {
            // TODO: FIX IMAGE FILES
            res.writeHead(200, { 'Content-Type': mimeTypes[ext] });
            fileContent = data;
        }
        else {
            console.log("File Not Found");
            console.log(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
            fileContent = fs.readFileSync(__dirname + "/App/Error.html", { encoding: "utf-8" });
        }
        res.write(fileContent);
        res.end();
    })
})

server.listen(port, hostname, () => {
    console.log(`Server Started at ${hostname}:${port}`);
})