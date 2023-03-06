import { RowDataPacket } from 'mysql2';

type UserEntity = {
  id: number,
  email: string,
  name: string,
  surname: string,
  role: 'ADMIN' | 'USER'
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
