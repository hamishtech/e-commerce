"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const app = express_1.default();
const donkey = 5;
console.log('donkey kong');
app.get('/', (_req, res) => {
    res.send('hello');
});
http_1.default.createServer(app).listen(3000, () => {
    console.log('running app on ' + donkey);
});
