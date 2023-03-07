import jwt from 'jsonwebtoken';
import config from '../config';

const createToken = (userEmail: string, userRole: string) => {
  const token = jwt.sign({ email: userEmail, role: userRole }, config.secret.jwtTokenKey);

  return token;
};

const TokenService = {
  createToken,
};

export default TokenService;
