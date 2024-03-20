import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user',
    },
  },
  { timestamps: true },
);

export const User = model<IUser>('User', userSchema);
