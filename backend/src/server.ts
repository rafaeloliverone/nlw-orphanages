import 'reflect-metadata';
import express from 'express';

import './database/connection.ts';

const app = express();

app.listen(3333);

app.get('/app', (request, response) => {

  response.send('Hello')
})