/* eslint-disable no-unused-vars */

import { Model } from 'mongoose';

export interface IUser {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  avatar: string;
  role: 'admin' | 'user';
}

// for creating a static
export interface UserModel extends Model<IUser> {
  isUserExistsByEmail(email: string): Promise<IUser | null>;
}
