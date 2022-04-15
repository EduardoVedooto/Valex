import { Router } from 'express';

import { checkValidAPIKey, checkCardType } from '../middlewares/index.js';
import { createNewCard } from '../controllers/index.js';

const cardsRouter = Router();

cardsRouter.post('/cards/new-card', checkValidAPIKey, checkCardType, /* checkNewCardData, */ createNewCard);

export default cardsRouter;
