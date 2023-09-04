const express = require("express")
const path = require('path');
let app = express();
const port = 80;
app.use(express.static(path.join(__dirname, "/public")))

app.listen(port, ()=>{
    console.log(`Server listening at port: ${port}`)
})
