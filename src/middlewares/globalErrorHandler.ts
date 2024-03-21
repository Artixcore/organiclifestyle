/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { IErrorSources } from '../interfaces/error';
import handleZodError from '../errors/handleZodError';
import config from '../config';
import httpStatus from 'http-status';

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  //setting default values
  let statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  let message = err?.message || httpStatus['500_MESSAGE'];
  let errorSources: IErrorSources[] = [
    {
      path: '',
      message: 'Something went wrong!',
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }

  // ultimate return
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err: config.nodeEnv === 'development' ? err : null,
    stack: config.nodeEnv === 'development' ? err?.stack : null,
  });
};
