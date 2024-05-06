/* eslint-disable max-len */
import _ from 'lodash';

const getDifferenceTree = (obj1, obj2) => {
  const getKeys = (obj) => Object.keys(obj);
  const keysMass = _.union(getKeys(obj1), getKeys(obj2));
  const last = _.sortBy(keysMass);
  return last.map((key) => {
    if (_.has(obj1, key) && _.has(obj2, key) && _.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return {
        type: 'parent',
        key,
        children: getDifferenceTree(obj1[key], obj2[key]),
      };
    } if (_.has(obj1, key) && _.has(obj2, key) && _.isPlainObject(obj1[key]) && !_.isPlainObject(obj2[key])) {
      return {
        type: 'diffValue',
        key,
        oldValue: obj1[key],
        newValue: obj2[key],
      };
    } if (_.has(obj1, key) && _.has(obj2, key) && !_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return {
        type: 'diffValue',
        key,
        oldValue: obj1[key],
        newValue: obj2[key],
      };
    } if (_.has(obj1, key) && !_.has(obj2, key) && _.isPlainObject(obj1[key])) {
      return {
        type: 'deleted',
        key,
        oldValue: obj1[key],
      };
    } if (!_.has(obj1, key) && _.has(obj2, key) && _.isPlainObject(obj2[key])) {
      return {
        type: 'added',
        key,
        oldValue: obj2[key],
      };
    } if (_.has(obj1, key) && _.has(obj2, key)) {
      if (obj1[key] === obj2[key]) {
        return {
          type: 'stay same',
          key,
          oldValue: obj1[key],
        };
      }
      return {
        type: 'diffValue',
        key,
        oldValue: obj1[key],
        newValue: obj2[key],
      };
    } if (_.has(obj1, key) && !_.has(obj2, key)) {
      return {
        type: 'deleted',
        key,
        oldValue: obj1[key],
      };
    }
    return {
      type: 'added',
      key,
      oldValue: obj2[key],
    };
  });
};
export default getDifferenceTree;
