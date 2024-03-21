import httpStatus from 'http-status';
import { UserServices } from '../services/user.service';
import catchAsync from '../utils/catchAsync';
import sendResponse from '../utils/sendResponse';

const registerUser = catchAsync(async (req, res) => {
  const userData = req.body;

  const result = await UserServices.registerUserFromDB(userData);

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Register Successful!',
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  console.log(req.body);
});

export const userControllers = {
  registerUser,
  loginUser,
};
