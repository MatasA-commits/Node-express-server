import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import { PartialCredentials, AuthSuccessResponse } from './types';
import ErrorService from '../../../services/error-service';
import credentialsSchema from './validation-schemas/credentials-validation-schema';
import UserModel from './model/index';
import createAuthSuccessResponse from './helpers/create-auth-success-response';

export const login: RequestHandler<
{},
AuthSuccessResponse | ResponseError,
PartialCredentials,
{}
> = async (req, res) => {
  try {
    const credentials = credentialsSchema.validateSync(req.body, { abortEarly: false });
    const user = await UserModel.getUserByEmail(credentials.email);
    const validPassword = await bcrypt.compare(credentials.password, user.password);

    if (!validPassword) throw new Error('incorrect password');

    res.status(200).json(createAuthSuccessResponse(user));
  } catch (err) {
    const [status, errorResponse] = ErrorService.handleError(err);
    res.status(status).json(errorResponse);
  }
};
