import { TransactionTypes } from '../repositories/cardRepository.js';

export default function checkCardType(req, res) {
  const { type } = req.body;
  console.log(type);
}
