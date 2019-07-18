"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = __importDefault(require("faker"));
var constants_1 = require("../constants");
var users = [
    {
        avatar: faker_1.default.internet.avatar(),
        email: faker_1.default.internet.email(),
        job: faker_1.default.name.jobDescriptor(),
        lastname: faker_1.default.name.lastName(),
        name: faker_1.default.name.firstName(),
        password: constants_1.PASSWORD,
        phone: faker_1.default.phone.phoneNumber(),
        username: constants_1.TEST_USER,
    },
];
exports.users = users;
