// Resource: https://nodejs.org/en/docs/guides/blocking-vs-non-blocking

/* Synchronous or blocking
 -- With a synchronous operation, if something takes a long time (non-javascript operations, e.g. reading a file from the hard-disk is something that is done by the system), then that function would block the rest of the code from running until the operation is completed. On a browser, that can mean an unresponsive web page. On a server, that can mean requests would stop being processed. However, this means that line by line execution of instructions is insured. 

 In Node.js, JavaScript that exhibits poor performance due to being CPU intensive rather than waiting on a non-JavaScript operation, such as I/O, isn't typically referred to as blocking.
*/

/* Asynchronous or Non-blocking
   line by line execution is not guaranteed. Callbacks are needed.
*/
const fs = require("fs");
const { resolve } = require("path");

// Blocking example
let start = performance.now();
const sync = fs.readFileSync("modules-test.txt", "utf-8"); //not specifying an encoding returns a buffer
// console.log(sync); // Definitely needs to be done after reading the file.
console.log("I must be done after reading the file");
console.log("I don't care about the file, just execute me.")
console.log("Time taken to the end synchronously: ", performance.now() - start, "\n\n");


//Non-Blocking Example. Uses some promise magic I don't understand yet.
let async;
start = performance.now();
//not specifying an encoding returns a buffer
fs.readFile("modules-test.txt", "utf-8", (err, data) => { //supports better error handling
    if (err == null) {
        // console.log(data)
        console.log("I must be done after reading the file");
        async = data;
    }
    else {
        console.log("error occured!");
        console.log(err);
    }
    console.log("done!!")
});
console.log(async); //will print undefined if the file hasn't been read yet.
console.log("I don't care about the file, just execute me.");
console.log("Time taken to go to the end asynchronously: ", performance.now() - start, "\n\n");



// Functions that do not have a 'Sync' in their name are asynchronous by default.

