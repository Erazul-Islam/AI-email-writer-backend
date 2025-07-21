"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: ['http://localhost:3000'],
    credential: true,
    method: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
console.log(process.cwd());
app.get('/', (req, res) => {
    res.send("Your server is running");
});
exports.default = app;
