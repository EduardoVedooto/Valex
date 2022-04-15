import { Request, Response } from 'express';
import { findByApiKey } from '../repositories/companyRepository.js';

export async function createNewCard(req: Request, res: Response) {
  const key: string = req.get('x-api-key');
  if(!key) {
    throw {type: 'unprocessable', message: 'missing API key'};
  }

  const companies = await findByApiKey(key);
  return res.status(501).send(companies);
}
