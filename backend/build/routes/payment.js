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
exports.router = void 0;
const stripe = require('stripe')('sk_test_51Ist3IFae7EgjcoUylQslyebXukzXaOWK6e9dKNWbPTonKfZBxN2EVg0xylcGnpA9FOKuNejfMudfK7aN1pzc8zR009VFJFHhO');
const express = require('express');
exports.router = express.Router();
const bodyParser = require('body-parser');
const paymentData_1 = require("../productData/paymentData");
var nodemailer = require('nodemailer');
exports.router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = paymentData_1.itemData.find((item) => {
        return item.id === req.body.id;
    });
    const session = yield stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item === null || item === void 0 ? void 0 : item.title,
                        images: [item === null || item === void 0 ? void 0 : item.img],
                    },
                    unit_amount: item === null || item === void 0 ? void 0 : item.price,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:3000/cancel`,
        metadata: item ? { ITEM_ID: item.id } : null,
    });
    res.json({ id: session.id });
}));
// Webhook that recieves request when order has been completed
const endpointSecret = 'whsec_w0sBDDQbe2XL5PQ0cCFuXALQcRKp0tTn';
const fulfillOrder = (session) => {
    console.log('Fulfilling order', session);
    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hamishcoding@gmail.com',
            pass: 'Firefox12!',
        },
    });
    var message = {
        from: 'hamishcoding@gmail.com',
        to: session.customer_details.email,
        subject: 'Message title',
        text: 'Thank you for your purchase',
        html: '<p>Please find your purchased template attached</p>',
        attachment: [
            {
                filename: 'text1.txt',
                content: 'hello world!',
            },
        ],
    };
    mail.sendMail(message, function (error, _info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email sent:');
        }
    });
};
exports.router.post('/webhook', bodyParser.raw({ type: 'application/json' }), (request, response) => {
    const payload = request.body;
    const sig = request.headers['stripe-signature'];
    let event;
    try {
        event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    }
    catch (err) {
        console.log(err);
        return response.status(400).send(`Webhook Error: ${err.message}`);
    }
    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        // Fulfill the purchase...
        fulfillOrder(session);
    }
    response.status(200);
});
