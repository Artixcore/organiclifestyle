import mongoose from 'mongoose';
import { IErrorSources, IGenericErrorResponse } from '../interfaces/error';
import httpStatus from 'http-status';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errorSources: IErrorSources[] = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );

  return {
    statusCode: httpStatus.NOT_ACCEPTABLE,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleValidationError;
