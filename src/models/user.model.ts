import { Schema, model } from 'mongoose';
import { IUser, UserModel } from '../interfaces/user.interface';
import bcrypt from 'bcrypt';
import config from '../config';

const userSchema = new Schema<IUser, UserModel>(
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
    password: {
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

// pre save middleware
userSchema.pre('save', async function (next) {
  // hasing the password and save into db
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcryptSaltRounds),
  );
  next();
});

// deleting password field
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();

  delete userObject.password;
  return userObject;
};

// creating a custom static method
userSchema.statics.isUserExists = async function (email: number) {
  const existingUser = await User.findOne({ email });
  return existingUser;
};

export const User = model<IUser, UserModel>('User', userSchema);
