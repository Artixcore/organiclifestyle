export interface IUser {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  avatar: string;
  role: 'admin' | 'user';
}
