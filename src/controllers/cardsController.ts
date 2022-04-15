import { Request, Response } from 'express';

export async function createNewCard(req: Request, res: Response) {
  const companyData = res.locals.companyData;
  
  return res.status(200).send(companyData);
}
