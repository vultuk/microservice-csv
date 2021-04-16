import {Options} from './options';

export type toCSV = (data: any, fileName: string, appendTimestamp?: boolean, options?: Options) => Promise<void>;
