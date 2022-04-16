import { Request, Response } from 'express';
import { cardServices, employeeServices } from '../services/index.js';

export async function createNewCard(req: Request, res: Response) : Promise<Object> {
  const { companyData, cardData } = res.locals;

  const validCardType = cardServices.checkCardType(cardData.type);
  if (!validCardType) {
    throw { type: 'unprocessable', message: 'invalid card type' };
  }

  const employeeExists = await employeeServices.checkExistentEmployee(cardData.employeeId);
  if (!employeeExists) {
    throw { type: 'notFound', message: 'employee does not exist' };
  }

  // somente um tipo de cartão por empregado
  /*
  const uniqueCardType = await cardServices.checkEmployeeCards(cardData.employeeId, cardData.type);
  console.log(uniqueCardType, '<<<<');
  */

  // cartão só pode ser mastercard

  return res.status(200).send({ companyData, cardData });
}
