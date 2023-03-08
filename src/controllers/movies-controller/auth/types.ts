import { RowDataPacket } from 'mysql2';

export type RegistrationData = {
  email: string,
  name: string,
  surname: string,
  password: string,
  passwordConfirmation: string
};

export type UserEntityRow = UserEntity & RowDataPacket;

export type UserViewModel = Omit<UserEntity, 'password'>;

export type Credentials = {
  email: string,
  password: string
};

export type PartialCredentials = Partial<Credentials>;

export type AuthSuccessResponse = {
  token: string,
  user: UserEntity
};