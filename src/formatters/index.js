import makeStylish from './stylish.js';
import plain from './plain.js';

const format = (data, fileFormat) => {
  switch (fileFormat) {
    case 'stylish':
      return makeStylish(data);
    case 'json':
      return JSON.stringify(data, null, 2);
    case 'plain':
      return plain(data);
    default:
      throw new Error(`${fileFormat} is not supported`);
  }
};

export default format;
