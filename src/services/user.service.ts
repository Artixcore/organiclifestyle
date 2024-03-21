import httpStatus from 'http-status';
import AppError from '../errors/AppError';
import { IUser } from '../interfaces/user.interface';
import { User } from '../models/user.model';

const registerUserFromDB = async (userData: IUser) => {
  // Check if a user with the provided email already exists
  if (await User.isUserExists(userData.email)) {
    throw new AppError(httpStatus.CONFLICT, 'User already exists!');
  }

  // If user does not exist, create the new user
  const result = User.create(userData);

  return result;
};

const LoginUserFromDB = async (userData: Partial<IUser>) => {
  console.log(userData);
};

export const UserServices = {
  registerUserFromDB,
  LoginUserFromDB,
};
