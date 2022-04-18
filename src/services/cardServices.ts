import dayjs from 'dayjs';
import { cardRepository } from '../repositories/index.js';
import { TransactionTypes, CardInsertData } from '../repositories/cardRepository.js';
import { validateCard } from '../utils/cardNumberValidation.js';
import { splitAndUpperCase, filterNamesBySize } from '../utils/cardNameFormatter.js';

const cardTypes: string[] = [
  'education',
  'groceries',
  'health',
  'restaurant',
  'transport',
];

export function checkCardType(cardType: string): boolean {
  if (!cardTypes.includes(cardType)) {
    return false;
  }

  return true;
}

export function checkCardEmitter(cardNumber: string) : boolean {
  return validateCard(cardNumber);
}

export async function checkEmployeeCards(employeeId: number, cardType: TransactionTypes)
: Promise<Object> {
  const employeeCards = await cardRepository.findByTypeAndEmployeeId(cardType, employeeId);

  return employeeCards;
}

export async function checkUniqueCard(cardNumber: string) : Promise<Object> {
  const cardByNumber = await cardRepository.findByCardNumber(cardNumber);

  return cardByNumber;
}

export function formatCardName(nameOnCard: string) : string {
  const splittedNames = splitAndUpperCase(nameOnCard);

  const formattedNames = filterNamesBySize(splittedNames);

  return formattedNames;
}

export async function insertNewCard(newCardData: CardInsertData) : Promise<any> {
  await cardRepository.insert(newCardData);
}

export async function checkExistentCard(cardId: number) : Promise<Object> {
  const existentCard = await cardRepository.findCardById(cardId);

  return existentCard;
}

export function isCardExpired(expirationDate: string) /* : boolean */ {
  console.log('now: ', dayjs(), 'expDate: ', expirationDate);
}
