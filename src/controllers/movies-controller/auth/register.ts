import { RequestHandler } from 'express';
import ErrorService from '../../../services/error-service';
import { AuthSuccessResponse, RegistrationBody } from './types';
import registrationDataValidationSchema from './validation-schemas/registration-data-validation-schema';
import UserModel from './model';
import createAuthSuccessResponse from './helpers/create-auth-success-response';

export const register: RequestHandler<
{},
AuthSuccessResponse | ResponseError,
Partial<RegistrationBody>,
{}
> = async (req, res) => {
  try {
    const { passwordConfirmation, ...registrationData } = registrationDataValidationSchema
      .validateSync(req.body, {
        abortEarly: false,
      });

    const emailAvailable = await UserModel.emailAvailable(registrationData.email);
    if (!emailAvailable) throw new Error(`Email: ${emailAvailable} is already taken`);

    const user = await UserModel.createUser(registrationData);

    res.status(200).json(createAuthSuccessResponse(user));
  } catch (err) {
    const [status, errorResponse] = ErrorService.handleError(err);
    res.status(status).json(errorResponse);
  }
};
