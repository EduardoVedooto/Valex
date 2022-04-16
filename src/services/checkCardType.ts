const cardTypes: string[] = [
  'education',
  'groceries',
  'health',
  'restaurant',
  'transport',
];

export default function checkCardType(cardType: string): boolean {
  let isValidType = true;
  if (!cardTypes.includes(cardType)) {
    isValidType = false;
  }

  return isValidType;
}
