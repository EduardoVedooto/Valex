const serviceErrorToStatusCode = {
  unauthorized: 401,
  conflict: 409,
  unprocessable: 422,
};

export default function errorHandlingMiddleware(err, req, res, next) {
  if (err.type) {
    return res.status(serviceErrorToStatusCode[err.type]).send(err.message);
  }

  return res.sendStatus(500);
}
