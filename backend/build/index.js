"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { json } from 'body-parser';
const express_1 = __importStar(require("express"));
const http_1 = __importDefault(require("http"));
const payment_1 = require("./routes/payment");
const app = express_1.default();
app.use((req, res, next) => {
    if (req.originalUrl === '/payment/webhook') {
        next();
    }
    else {
        express_1.json()(req, res, next);
    }
});
app.get('/', (_req, res) => {
    res.send('hello');
});
app.use('/payment', payment_1.router);
http_1.default.createServer(app).listen(8080, () => {
    console.log('running app on 8080');
});
