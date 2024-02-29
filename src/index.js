import fs from 'fs';
import path from 'path';
import compareData from './compareData.js';
import makeParse from './parser.js';
import getFormat from './formatters/index.js';

const getPath = (way) => path.resolve(process.cwd(), way);

const getData = (filepath1, filepath2) => {
  const absolutePath1 = getPath(filepath1);
  const absolutePath2 = getPath(filepath2);

  const content1 = fs.readFileSync(absolutePath1, 'utf-8');
  const content2 = fs.readFileSync(absolutePath2, 'utf-8');

  const parsedFile1 = makeParse(content1, filepath1.split('.')[1]);
  const parsedFile2 = makeParse(content2, filepath2.split('.')[1]);

  return { parsedFile1, parsedFile2 };
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const { parsedFile1, parsedFile2 } = getData(filepath1, filepath2);
  const differences = getFormat(compareData(parsedFile1, parsedFile2), formatName);
  return differences;
};

export default genDiff;
