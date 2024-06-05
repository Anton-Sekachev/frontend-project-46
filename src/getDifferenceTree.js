import _ from 'lodash';

const getDifferenceTree = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));

  const sortedKeys = _.sortBy(keys);
  const diff = sortedKeys.map((key) => {
    if (!_.has(obj1, key)) {
      return {
        type: 'added',
        key,
        value: obj2[key],
      };
    }

    if (!_.has(obj2, key)) {
      return {
        type: 'deleted',
        key,
        value: obj1[key],
      };
    }

    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return {
        type: 'parent',
        key,
        children: getDifferenceTree(obj1[key], obj2[key]),
      };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        type: 'diffValue',
        key,
        oldValue: obj1[key],
        newValue: obj2[key],
      };
    }

    return {
      type: 'stay same',
      key,
      value: obj2[key],
    };
  });

  return diff;
};

export default getDifferenceTree;
