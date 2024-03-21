import { catchAsync } from '../utils/catchAsync';

const registerUser = catchAsync(async (req, res) => {
  console.log(req.body);
});

const loginUser = catchAsync(async (req, res) => {
  console.log(req.body);
});

export const userControllers = {
  registerUser,
  loginUser,
};
