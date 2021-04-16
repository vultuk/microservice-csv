import { Response } from 'express';

export const convert = (response: Response) => (data: any): Response => {
  response.json(data);

  return response;
};
