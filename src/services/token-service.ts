import jwt from 'jsonwebtoken';
import config from '../config';

const create = (data: AuthData) => {
  const token = jwt.sign(data, config.secret.jwtTokenKey);

  return token;
};

const decode = (token: string) => jwt.decode(token) as (DecodedAuthData | null);

const TokenService = {
  create,
  decode,
};

export default TokenService;
