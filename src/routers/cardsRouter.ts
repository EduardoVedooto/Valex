import { Router } from 'express';

import { checkValidAPIKey, cardDataJoiMiddleware } from '../middlewares/index.js';
import { createNewCard } from '../controllers/index.js';

const cardsRouter = Router();

cardsRouter.post('/cards/new-card', checkValidAPIKey, cardDataJoiMiddleware, createNewCard);

export default cardsRouter;
