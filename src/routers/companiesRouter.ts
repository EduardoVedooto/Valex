import { Router } from 'express';

// import middlewareA from .../middlewares/...
// import functionA from .../controllers/...

//
import { findByApiKey } from '../repositories/companyRepository.js';
//
const companiesRouter = Router();

companiesRouter.get('/companies', async (req, res) => {
  const companies = await findByApiKey('zadKLNx.DzvOVjQH01TumGl2urPjPQSxUbf67vs0');
  console.log(companies);
  return res.status(501).send(companies);
})

export default companiesRouter;