import makeGoodView from './stylish.js';
import plain from './plain.js';

const getFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return makeGoodView(data);
    case 'json':
      return JSON.stringify(data, null, 2);
    case 'plain':
      return plain(data);
    default:
      throw new Error(`${format} is not supported`);
  }
};

export default getFormat;
