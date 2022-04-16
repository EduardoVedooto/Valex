import { cardRepository } from '../repositories/index.js';
import { TransactionTypes } from '../repositories/cardRepository.js';

const cardTypes: string[] = [
  'education',
  'groceries',
  'health',
  'restaurant',
  'transport',
];

export function checkCardType(cardType: string): boolean {
  let isValidType = true;
  if (!cardTypes.includes(cardType)) {
    isValidType = false;
  }

  return isValidType;
}

export async function checkEmployeeCards(employeeId: number, cardType: TransactionTypes) : Promise<Object> {
  const employeeCards = cardRepository.findByTypeAndEmployeeId(cardType, employeeId);

  return employeeCards;
}
