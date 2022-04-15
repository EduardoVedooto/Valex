const serviceErrorToStatusCode = {
  unauthorized: 401,
  conflict: 409,
  unprocessable: 422,
};

export function unauthorizedError() {
  return { type: "unauthorized" };
}

export function conflictError() {
  return { type: "conflict" };
}

export default function errorHandlingMiddleware(err, req, res, next) {
  if (err.type) {
    res.status(serviceErrorToStatusCode[err.type]).send(err.message);
  }

  res.sendStatus(500);
}