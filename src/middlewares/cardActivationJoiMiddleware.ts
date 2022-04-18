import { NextFunction, Request, Response } from 'express';
import { activateCardSchema } from '../schemas/index.js';

export default function cardActivationJoiMiddleware(req: Request, res: Response, next: NextFunction) {
  const cardData = req.body;
  const activateCardValidation = activateCardSchema.validate(cardData);
  if (activateCardValidation.error) {
    const errorDetails = activateCardValidation.error.details[0];
    throw { type: 'unprocessable', message: errorDetails.message };
  }

  res.locals.cardData = activateCardValidation.value;
  
  next();
}
