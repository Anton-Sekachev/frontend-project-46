import yaml from 'js-yaml';

const makeParse = (data, type) => {
  switch (type) {
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    case 'json':
    default:
      return JSON.parse(data);
  }
};

export default makeParse;
