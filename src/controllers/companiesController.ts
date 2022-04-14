import { Request, Response } from 'express';
import { findByApiKey } from '../repositories/companyRepository.js';

export async function searchCompany(req: Request, res: Response) {
  const key: string = req.get('x-api-key');
  const companies = await findByApiKey(key);
  return res.status(501).send(companies);
}
