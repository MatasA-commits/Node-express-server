import { AuthSuccessResponse, UserEntityRow } from '../types';
import TokenService from '../../../../services/token-service';

const createAuthSuccessResponse = ({ password, ...user }: UserEntityRow):AuthSuccessResponse => {
  const data = { email: user.email };
  const token = TokenService.create(data);

  return {
    token,
    user,
  };
};

export default createAuthSuccessResponse;
