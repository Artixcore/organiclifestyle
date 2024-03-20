/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  //setting default values
  const statusCode = 500;
  const message = 'Something went wrong!';

  if (err instanceof ZodError) {
  }

  // ultimate return
  return res.status(statusCode).json({
    success: false,
    message: message,
    error: err,
  });
};
