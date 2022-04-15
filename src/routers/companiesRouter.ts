import { Router } from 'express';

// import middlewareA from .../middlewares/...
import { createNewCard } from '../controllers/index.js';

const companiesRouter = Router();

companiesRouter.get('/companies', createNewCard);

export default companiesRouter;
