/* eslint-disable consistent-return */
import { RequestHandler } from 'express';
import { AnySchema } from 'yup';

type Validate = (schema: AnySchema) => RequestHandler;
const valdate: Validate = (schema: AnySchema) => async (
  req,
  res,
  next,
) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    next();
  } catch (e) {
    if (e instanceof Error) res.status(400).send(e.message);
    else {
      res.status(400).send(e);
    }
  }
};

export default valdate;
