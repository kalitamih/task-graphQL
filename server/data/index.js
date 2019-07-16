"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var faker_1 = __importDefault(require("faker"));
var username = faker_1.default.internet.userName();
var password = faker_1.default.internet.password();
exports.password = password;
var encryptedPassword = '';
bcrypt_1.default.hash(password, 10).then(function (hash) {
    encryptedPassword = hash;
});
var users = [
    {
        encryptedPassword: encryptedPassword,
        username: username,
    },
];
exports.users = users;
