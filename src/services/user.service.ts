import { IUser } from '../interfaces/user.interface';

const registerUserFromDB = async (userData: IUser) => {
  console.log(userData);
};

const LoginUserFromDB = async (userData: Partial<IUser>) => {
  console.log(userData);
};

export const UserServices = {
  registerUserFromDB,
  LoginUserFromDB,
};
