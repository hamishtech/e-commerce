import express from 'express';
import http from 'http';
import { router as paymentRouter } from './routes/payment';

const app = express();

app.get('/', (_req, res) => {
  res.send('hello');
});

app.use('/payment', paymentRouter);

http.createServer(app).listen(8080, () => {
  console.log('running app on 8080');
});
