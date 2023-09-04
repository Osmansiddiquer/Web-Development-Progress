"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const socket_io_1 = require("socket.io");
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const key = fs_1.default.readFileSync(__dirname + '/server.key', 'utf-8');
const cert = fs_1.default.readFileSync(__dirname + '/server.crt', 'utf-8');
const port = 8443;
const parameters = {
    key: key,
    cert: cert,
    passphrase: 'nimda'
};
// app is set as request listener
const server = https_1.default.createServer(parameters, app);
app.use(express_1.default.static(path_1.default.join(__dirname, "/public")));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "/dist/index.html"));
});
// user management using mongoDB
mongoose_1.default.connect('mongodb://127.0.0.1:27017/chat-users')
    .then(() => {
    console.log('connection successful');
    mongoose_1.default.connection.on('error', err => {
        console.log(err);
    });
    mongoose_1.default.connection.on('disconnected', () => {
        console.log("Database disconnected");
    });
})
    .catch(e => {
    console.log("Failed to connect to mongodb.");
});
const userSchema = new mongoose_1.default.Schema({
    _id: String,
    name: String
});
const User = mongoose_1.default.model('Users', userSchema);
User.collection.drop();
// Socket io
const io = new socket_io_1.Server(server);
io.on('connection', (socket) => {
    socket.on('set-name', (name) => __awaiter(void 0, void 0, void 0, function* () {
        name = String(name);
        if ((!(yield usernameExists(name))) && (name != 'null') && (name.length != 0)) {
            addUser(socket.id, name);
            socket.broadcast.emit('join', yield getNameById(socket.id));
            console.log(name, "has joined");
        }
        else {
            name = yield proposeUnique(name);
            io.to(socket.id).emit('name-proposal', name);
        }
    }));
    socket.on('disconnect', () => __awaiter(void 0, void 0, void 0, function* () {
        let name = yield getNameById(socket.id);
        io.emit('left', name);
        removeUser(socket.id);
        console.log(`user[${name}] disconnected`);
    }));
    socket.on('outgoing-message', (msg) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('message: ' + msg);
        socket.broadcast.emit("incoming-message", msg, yield getNameById(socket.id));
    }));
});
server.listen(port, '192.168.15.63', () => {
    console.log(`Server is listening at port ${port}`);
});
function proposeUnique(username) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp = username;
        while (yield usernameExists(temp)) {
            temp = username + '-' + generateRandomString(3);
        }
        return temp;
    });
}
function usernameExists(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let found = yield User.findOne({ name: username });
            if (found)
                return true;
            else
                return false;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    });
}
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function addUser(id, username) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = new User({ _id: id, name: username });
        try {
            yield user.save();
        }
        catch (err) {
            console.log(`failed to add user: ${username}`);
            console.log(err);
        }
    });
}
function getNameById(id) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        return (_a = (yield User.findOne({ _id: id }))) === null || _a === void 0 ? void 0 : _a.name;
    });
}
function removeUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield User.findOneAndDelete({ _id: id });
        }
        catch (_a) {
            console.log('failed to remove user.');
        }
    });
}
function removeUserByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield User.findOneAndDelete({ 'name': name });
        }
        catch (_a) {
            console.log('failed to remove user.');
        }
    });
}
