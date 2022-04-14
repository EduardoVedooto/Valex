import { Router } from 'express';
import companiesRouter from './companiesRouter.js';

const mainRouter = Router();
mainRouter.use(companiesRouter);

export default mainRouter;
