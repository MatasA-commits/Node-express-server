import { getUserByEmail } from './get-user';
import { createUser } from './create-user';
import { emailAvailable } from './email-available';

const UserModel = {
  getUserByEmail,
  createUser,
  emailAvailable,
};

export default UserModel;
