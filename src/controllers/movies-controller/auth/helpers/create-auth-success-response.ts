import { AuthSuccessResponse, UserViewModel, UserEntityRow } from '../types';
import TokenService from '../../../../services/token-service';

const createAuthSuccessResponse = (user: UserEntityRow):AuthSuccessResponse => {
  const token = TokenService.createToken(user.email, user.role);
  const userViewModel: UserViewModel = {
    id: user.id,
    email: user.email,
    name: user.name,
    surname: user.surname,
    role: user.role,
  };
  return {
    token,
    user: userViewModel,
  };
};

export default createAuthSuccessResponse;
