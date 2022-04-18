import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { cardServices, employeeServices } from '../services/index.js';

dayjs.extend(customParseFormat);

export async function createNewCard(req: Request, res: Response) : Promise<Object> {
  const { cardData } = res.locals;

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

  cardData.expirationDate = dayjs().add(5, 'y').format('MM-YY');

  const hashedCVC = bcrypt.hashSync(cardData.securityCode, 10);
  cardData.securityCode = hashedCVC;

  cardData.password = null;

  await cardServices.insertNewCard(cardData);

  return res.sendStatus(201);
}

export async function activateCard(req: Request, res: Response) : Promise<Object> {
  const cardId: number = parseInt(req.params.id, 10);

  const existentCard = await cardServices.checkExistentCard(cardId);
  if (!existentCard) {
    throw { type: 'notFound', message: 'non-existent card' };
  }

  console.log('now: ', dayjs().format('MM-YY'), 'expDate: ', existentCard['expirationDate']);

  console.log('formatting: ', dayjs('04-27', 'MM-YY', true));

  /*
  console.log(dayjs().isAfter(`${existentCard['expirationDate']}`, 'day'), 'after?');
  */

  return res.sendStatus(501);
}
