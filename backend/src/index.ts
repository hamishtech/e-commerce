// import { json } from 'body-parser';
import express, { json } from 'express';
import http from 'http';
import { router as paymentRouter } from './routes/payment';

const app = express();

app.use(
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    if (req.originalUrl === '/payment/webhook') {
      next();
    } else {
      json()(req, res, next);
    }
  }
);
app.get('/', (_req, res) => {
  res.send('hello');
});

app.use('/payment', paymentRouter);

http.createServer(app).listen(8080, () => {
  console.log('running app on 8080');
});
