import { Router } from 'express';
//
import { faker } from '@faker-js/faker';
//

import { checkValidAPIKey, cardDataJoiMiddleware } from '../middlewares/index.js';
import { createNewCard } from '../controllers/index.js';

const cardsRouter = Router();

console.log(faker.finance.creditCardNumber('5###############'));

cardsRouter.post('/cards/new-card', checkValidAPIKey, cardDataJoiMiddleware, createNewCard);

export default cardsRouter;
