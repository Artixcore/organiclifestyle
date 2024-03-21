import { IUser } from '../interfaces/user.interface';

const createUserFromDB = async (userData: IUser) => {
  console.log(userData);
};

const LoginUserFromDB = async (userData: Partial<IUser>) => {
  console.log(userData);
};

export const UserServices = {
  createUserFromDB,
  LoginUserFromDB,
};
