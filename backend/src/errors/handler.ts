import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { ValidationError } from 'yup';
import AppError from './AppError';

interface ValidationErrors {
  [key: string]: string[]
}

const errorHandler: ErrorRequestHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach(error => {
      errors[error.path] = error.errors;
    })

    return response.status(400).json({
      message: 'Validation fails', 
      errors,
    })
  }

  console.error(error)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });

}

export default errorHandler;