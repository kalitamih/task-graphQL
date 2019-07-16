"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var username = 'kalitamih';
var users = [
    {
        password: '1991',
        username: 'kalitamih',
    },
];
exports.users = users;
var user = users[0];
var password = user.password;
bcrypt_1.default.hash(password, 10).then(function (hash) {
    users[0].password = hash;
});
