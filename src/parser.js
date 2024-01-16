import yaml from 'js-yaml';

const parse = (data, type) => {
  switch (type) {
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    case 'json':
    default:
      return JSON.parse(data);
  }
};

export default parse;
