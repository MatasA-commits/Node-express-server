import { RequestHandler } from 'express';
import { PartialCredentials, AuthSuccessResponse } from './types';
import ErrorService, { ServerSetupError } from '../../../services/error-service';
import UserModel from './model/index';
import createAuthSuccessResponse from './helpers/create-auth-success-response';

export const auth: RequestHandler<
{},
AuthSuccessResponse | ResponseError,
PartialCredentials,
{}
> = async (req, res) => {
  try {
    if (req.authData === undefined) throw new ServerSetupError();
    const user = await UserModel.getUserByEmail(req.authData.email);

    res.status(200).json(createAuthSuccessResponse(user));
  } catch (err) {
    const [status, errorResponse] = ErrorService.handleError(err);
    res.status(status).json(errorResponse);
  }
};
