import { Response } from 'express';
import { json2csvAsync as converter } from 'json-2-csv';

import { Options } from '.';

export const convert = (response: Response) => async (
  data: any,
  fileName: string,
  appendTimestamp: boolean = true,
  options?: Options,
): Promise<void> => {
  const convertedData = await converter(data, options);
  const currentDate = new Date();
  const timestamp = `${currentDate.getFullYear()}${currentDate.getMonth()}${currentDate.getDate()}.${currentDate.getHours()}${
    currentDate.getMinutes
  }`;

  const filename = `${fileName}${appendTimestamp ? `.${timestamp}` : ''}.csv`;

  response.header('Content-Type', 'text/csv');
  response.attachment(filename);

  response.send(convertedData);
};
