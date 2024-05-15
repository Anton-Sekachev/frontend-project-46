import fs from 'fs';
import path from 'path';
import getDifferenceTree from './getDifferenceTree.js';
import makeParse from './parser.js';
import format from './formatters/index.js';

const getPath = (way) => path.resolve(process.cwd(), way);

const getData = (filepath) => {
  const absolutePath = getPath(filepath);
  const content = fs.readFileSync(absolutePath, 'utf-8');
  const parsedFile = makeParse(content, filepath.split('.')[1]);
  return parsedFile;
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const parsedFile1 = getData(filepath1);
  const parsedFile2 = getData(filepath2);
  const differences = format(getDifferenceTree(parsedFile1, parsedFile2), formatName);
  return differences;
};

export default genDiff;
