/* eslint-disable no-plusplus */
// by Kelvin Zhang, https://medium.com/p/b9fa63ec7863#c33a 

const acceptedCardEmitters = {
  mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
};

export function validateCard(number: string) {
  // remove non digit characters
  const cardNumber = number.replace(/\D/g, ''); 
  let sum = 0;
  let shouldDouble = false;
  // loop through values starting at the rightmost side
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10);

    if (shouldDouble) {
      const doubledDigit = digit * 2;
      if (doubledDigit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  let valid = false;
  if ( sum % 10 === 0) {
    valid = true;
  }

  let accepted = false;

  // loop through the keys (visa, mastercard, amex, etc.)
  Object.keys(acceptedCardEmitters).forEach( key => {
    const regex = acceptedCardEmitters[key];
    if (regex.test(cardNumber)) {
      accepted = true;
    }
  });

  return valid && accepted;
}
