import bcrypt from 'bcrypt';
import config from '../config';

const hash = (value: string) => bcrypt.hashSync(value, config.passwordEncryption.bcryptRounds);

const compare = (value: string, hashedValue: string) => bcrypt.compareSync(value, hashedValue);

const BcryptService = {
  hash,
  compare,
};

export default BcryptService;
