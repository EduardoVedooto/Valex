import { Request, Response } from 'express';
import { checkCardType, checkExistentEmployee } from '../services/index.js';

export async function createNewCard(req: Request, res: Response) {
  const { companyData, cardData } = res.locals;

  const validCardType = checkCardType(cardData.type);
  if (!validCardType) {
    throw { type: 'unprocessable', message: 'invalid card type' };
  }

  const employeeExists = await checkExistentEmployee(cardData.employeeId);
  if (!employeeExists) {
    throw { type: 'notFound', message: 'employee does not exist' };
  }

  return res.status(200).send({ companyData, cardData });
}
