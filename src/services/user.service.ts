import { IUser } from '../interfaces/user.interface';
import { User } from '../models/user.model';

const registerUserFromDB = async (userData: IUser) => {
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
