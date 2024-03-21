import httpStatus from 'http-status';
import { UserServices } from '../services/user.service';
import catchAsync from '../utils/catchAsync';
import sendResponse from '../utils/sendResponse';

const registerUser = catchAsync(async (req, res) => {
  const result = await UserServices.registerUserFromDB(req.body);

  return sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Thanks for registering!',
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await UserServices.LoginUserFromDB(req.body);

  console.log(result);
});

export const userControllers = {
  registerUser,
  loginUser,
};
