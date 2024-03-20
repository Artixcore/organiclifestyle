export interface IUser {
  fullName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  role: 'admin' | 'user';
}
