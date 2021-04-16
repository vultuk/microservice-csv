import { NextFunction, Request, Response } from 'express';

import { convert } from './convert';
import { toCSV } from './Types/toCSV';

declare global {
  namespace Express {
    interface Response {
      toCSV: toCSV;
    }
  }
}

export default (req: Request, res: Response, next: NextFunction) => {
  res.toCSV = convert(res);

  next();
};
