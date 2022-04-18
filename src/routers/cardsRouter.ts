import { Router } from 'express';
import { checkValidAPIKey, cardDataJoiMiddleware, cardActivationJoiMiddleware } from '../middlewares/index.js';
import { createNewCard } from '../controllers/index.js';

const cardsRouter = Router();
cardsRouter.post('/cards/new-card', checkValidAPIKey, cardDataJoiMiddleware, createNewCard);
cardsRouter.post('/cards/:id/activate', cardActivationJoiMiddleware);

export default cardsRouter;
