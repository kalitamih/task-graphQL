"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var faker_1 = __importDefault(require("faker"));
var users = [
    {
        avatar: faker_1.default.internet.avatar(),
        email: faker_1.default.internet.email(),
        job: faker_1.default.name.jobDescriptor(),
        lastname: faker_1.default.name.lastName(),
        name: faker_1.default.name.firstName(),
        password: '1991',
        phone: faker_1.default.phone.phoneNumber(),
        username: 'kalitamih',
    },
    {
        avatar: faker_1.default.internet.avatar(),
        email: faker_1.default.internet.email(),
        job: faker_1.default.name.jobDescriptor(),
        lastname: faker_1.default.name.lastName(),
        name: faker_1.default.name.firstName(),
        password: 'react',
        phone: faker_1.default.phone.phoneNumber(),
        username: 'react',
    },
    {
        avatar: faker_1.default.internet.avatar(),
        email: faker_1.default.internet.email(),
        job: faker_1.default.name.jobDescriptor(),
        lastname: faker_1.default.name.lastName(),
        name: faker_1.default.name.firstName(),
        password: 'admin',
        phone: faker_1.default.phone.phoneNumber(),
        username: 'admin',
    },
];
exports.users = users;
var _loop_1 = function (i) {
    var password = users[i].password;
    bcrypt_1.default.hash(password, 10).then(function (hash) {
        users[i].password = hash;
    });
};
for (var i = 0; i < 3; i++) {
    _loop_1(i);
}
