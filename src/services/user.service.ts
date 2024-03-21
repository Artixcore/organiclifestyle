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

const LoginUserFromDB = async (userCredentials: Partial<IUser>) => {
  // Check if a user with the provided email exists
  const userExists = await User.isUserExists(userCredentials.email as string);

  console.log(userExists);

  if (!userExists) {
    // If user does not exist, throw an AppError with status code 401 (Unauthorized)
    throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid Email!');
  }
};

export const UserServices = {
  registerUserFromDB,
  LoginUserFromDB,
};
