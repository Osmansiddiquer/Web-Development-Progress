import express from 'express';
import https from 'https';
import fs from 'fs';
import { Server } from 'socket.io';
import path from 'path';
import mongoose from 'mongoose';

const app = express()

const key = fs.readFileSync(__dirname + '/server.key', 'utf-8');
const cert = fs.readFileSync(__dirname + '/server.crt', 'utf-8')
const port = 8443
const parameters = {
    key: key,
    cert: cert,
    passphrase: 'nimda'
}
// app is set as request listener
const server = https.createServer(parameters, app)

app.use(express.static(path.join(__dirname, "/public")))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/dist/index.html"));
});

// user management using mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/chat-users')
    .then(() => {
        console.log('connection successful');
        mongoose.connection.on('error', err => {
            console.log(err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log("Database disconnected");
        });
    })
    .catch(e => {
        console.log("Failed to connect to mongodb.")
    })

const userSchema = new mongoose.Schema({
    _id: String,
    name: String
})

const User = mongoose.model('Users', userSchema);
User.collection.drop();
// Socket io
const io = new Server(server)
io.on('connection', (socket) => {

    socket.on('set-name', async (name: string) => {
        name = String(name);
        if ((!(await usernameExists(name)))&&(name != 'null') && (name.length!=0)) {
            addUser(socket.id, name);
            socket.broadcast.emit('join', await getNameById(socket.id));
            console.log(name, "has joined")
        }
        else {
            name = await proposeUnique(name);
            io.to(socket.id).emit('name-proposal', name);
        }
    });

    socket.on('disconnect', async () => {
        let name = await getNameById(socket.id);
        io.emit('left', name);
        removeUser(socket.id);
        console.log(`user[${name}] disconnected`);
    });

    socket.on('outgoing-message', async (msg) => {
        console.log('message: ' + msg);
        socket.broadcast.emit("incoming-message", msg, await getNameById(socket.id));
    });

});

server.listen(port, '192.168.15.63', () => {
    console.log(`Server is listening at port ${port}`)
});

async function proposeUnique(username: string) {
    let temp = username;
    while (await usernameExists(temp)) {
        temp = username + '-' + generateRandomString(3);
    }
    return temp;
}

async function usernameExists(username: string) {
    try {
        let found = await User.findOne({ name: username });
        if (found)
            return true;
        else
            return false;
    }
    catch (err) {
        console.log(err);
        return false;
    }
}

function generateRandomString(length: number) {
    let result = '';
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

async function addUser(id: string, username: string) {
    let user = new User({ _id: id, name: username });
    try {
        await user.save();
    }
    catch (err) {
        console.log(`failed to add user: ${username}`);
        console.log(err);
    }
}

async function getNameById(id: string) {
    return (await User.findOne({_id: id}))?.name;
}

async function removeUser(id: string) {
    try {
        await User.findOneAndDelete({_id: id});
    }
    catch {
        console.log('failed to remove user.')
    }
}

async function removeUserByName(name: string) {
    try {
        await User.findOneAndDelete({ 'name': name });
    }
    catch {
        console.log('failed to remove user.')
    }
}