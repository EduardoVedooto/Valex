import { NextFunction, Request, Response } from 'express';
import { cardDataSchema } from '../schemas/index.js';

export default function cardDataJoiMiddleware(req: Request, res: Response, next: NextFunction) {
  const cardData = req.body;
  const cardValidation = cardDataSchema.validate(cardData);
  if (cardValidation.error) {
    const errorDetails = cardValidation.error.details[0];
    throw { type: 'unprocessable', message: errorDetails.message };
  }

  res.locals.cardData = cardValidation.value;

  next();
}
