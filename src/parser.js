import yaml from 'js-yaml';

const makeParse = (data, type) => {
  switch (type) {
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`Format ${type} is not supported!`);
  }
};

export default makeParse;
