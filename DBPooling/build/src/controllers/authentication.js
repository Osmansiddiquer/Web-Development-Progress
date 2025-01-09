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
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const users_1 = require("../db/users");
;
const index_1 = require("../helpers/index");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            res.sendStatus(400);
            return;
        }
        const exisitngUser = yield (0, users_1.getUserByEmail)(email);
        if (exisitngUser) {
            res.sendStatus(409);
            return;
        }
        const salt = (0, index_1.random)();
        const user = yield (0, users_1.createUser)({
            email: email,
            username: username,
            authentication: {
                salt: salt, // No need to store salt
                password: (0, index_1.authentication)(salt, password)
            }
        });
        res.status(200).json(user).end();
        return;
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
        return;
    }
});
exports.register = register;
//# sourceMappingURL=authentication.js.map