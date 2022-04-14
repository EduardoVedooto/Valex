import { Router } from 'express';

// import middlewareA from .../middlewares/...
import { searchCompany } from '../controllers/index.js';

const companiesRouter = Router();

companiesRouter.get('/companies', searchCompany);

export default companiesRouter;
