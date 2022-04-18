import { NextFunction, Request, Response } from 'express';

const serviceErrorToStatusCode = {
  unauthorized: 401,
  conflict: 409,
  unprocessable: 422,
  notFound: 404,
};

export default function errorHandlingMiddleware(err: any, req: Request, res: Response,  next: NextFunction) {
  if (err.type) {
    return res.status(serviceErrorToStatusCode[err.type]).send(err.message);
  }

  return res.status(500).send(err);
}
