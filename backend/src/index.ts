import express from 'express';
import http from 'http';

const app = express();

console.log('donkey kong');

app.get('/', (_req, res) => {
  res.send('hello');
});

http.createServer(app).listen(3000, () => {
  console.log('running app on');
});
