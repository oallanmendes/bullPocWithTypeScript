"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var CreateUserService_1 = __importDefault(require("./services/CreateUserService"));
var port = process.env.PORT || 3000;
var app = express_1.default();
app.use(express_1.default.json());
app.listen(port, function () { return console.log("Server running on port: " + port + "! \uD83D\uDE80"); });
app.get('/', function (request, response) {
    return response.json({ message: 'Ok' });
});
app.post('/sendEmail', CreateUserService_1.default.createUser);
