import { Response } from 'express';
import { json2csvAsync as converter } from 'json-2-csv';

import { Options } from '.';

export const convert = (response: Response) => async (data: any, options?: Options): Promise<void> => {
  const convertedData = await converter(data, options);

  response.end(convertedData);
};
