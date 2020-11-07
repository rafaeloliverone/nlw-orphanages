import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';

import './database/connection.ts';
import routes from './routes';
import AppError from './errors/AppError';

const app = express();
var port = process.env.PORT || 3333;

app.use(express.json())
app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
})

app.listen(port, () => {
  console.log(`Server started on port ${port}! 🚀`)
});
