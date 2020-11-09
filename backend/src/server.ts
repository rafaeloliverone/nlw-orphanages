import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';

import path from 'path';

import './database/connection.ts';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();
var port = process.env.PORT || 3333;

app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}! 🚀`)
});
