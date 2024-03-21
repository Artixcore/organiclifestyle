import { catchAsync } from '../utils/catchAsync';

const registerUser = catchAsync(async (req, res) => {
  const userData = req.body;
  console.log(userData);
});

const loginUser = catchAsync(async (req, res) => {
  console.log(req.body);
});

export const userControllers = {
  registerUser,
  loginUser,
};
