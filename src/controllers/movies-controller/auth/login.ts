import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { PartialCredentials, AuthSuccessResponse, UserViewModel } from './types';
import ErrorService from '../../../services/error-service';
import credentialsSchema from './validation-schemas/credentials-validation-schema';
import userModel from './model/index';
import config from '../../../config';

export const login: RequestHandler<
{},
AuthSuccessResponse | ResponseError,
PartialCredentials,
{}
> = async (req, res) => {
  try {
    const credentials = credentialsSchema.validateSync(req.body, { abortEarly: false });
    const user = await userModel.getUser(credentials.email);
    const validPassword = await bcrypt.compare(credentials.password, user.password);

    if (!validPassword) throw new Error('incorrect password');
    const token = jwt.sign({ email: user.email, role: user.role }, config.secret.jwtTokenKey);

    const userViewModel: UserViewModel = {
      id: user.id,
      email: user.email,
      name: user.name,
      surname: user.surname,
      role: user.role,
    };

    res.status(200).json({
      token,
      user: userViewModel,
    });
  } catch (err) {
    const [status, errorResponse] = ErrorService.handleError(err);
    res.status(status).json(errorResponse);
  }
};
