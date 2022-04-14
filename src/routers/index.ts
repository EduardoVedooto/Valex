import { Router } from 'express';
import companiesRouter from './companiesRouter.js';

// import routerB from ...

const mainRouter = Router();
mainRouter.use(companiesRouter);

export default mainRouter;

