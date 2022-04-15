import { Router } from 'express';
import cardsRouter from './cardsRouter.js';

const mainRouter = Router();
mainRouter.use(cardsRouter);

export default mainRouter;
