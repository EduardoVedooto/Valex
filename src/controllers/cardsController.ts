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

  const validCardEmitter = cardServices.checkCardEmitter(cardData.number);
  if (!validCardEmitter) {
    throw { type: 'unprocessable', message: 'invalid card number' };
  }

  const employeeCardsByType = await cardServices.checkEmployeeCards(cardData.employeeId, cardData.type);
  if (employeeCardsByType !== undefined) {
    throw {
      type: 'unprocessable',
      message: 'employee already has card of this type',
    };
  }

  const uniqueCard = await cardServices.checkUniqueCard(cardData.number);
  if (uniqueCard) {
    throw { type: 'conflict', message: 'card number already exists' };
  }

  const formattedNameOnCard = cardServices.formatCardName(cardData.cardholderName);
  cardData.cardholderName = formattedNameOnCard;

  return res.status(200).send(res.locals);
}
