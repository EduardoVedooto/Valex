import { cardRepository } from '../repositories/index.js';
import { TransactionTypes } from '../repositories/cardRepository.js';
import { validateCard } from '../utils/cardNumberValidation.js';

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

export async function checkEmployeeCards(employeeId: number, cardType: TransactionTypes) : Promise<Object> {
  const employeeCards = await cardRepository.findByTypeAndEmployeeId(cardType, employeeId);

  return employeeCards;
}

export async function checkUniqueCard(cardNumber: string) : Promise<Object> {
  const cardByNumber = await cardRepository.findByCardNumber(cardNumber);

  return cardByNumber;
}
