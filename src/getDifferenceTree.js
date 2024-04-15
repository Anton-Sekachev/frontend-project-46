import _ from 'lodash';

const getDifferenceTree = (obj1, obj2) => {
  const getKeys = (obj) => Object.keys(obj);
  const keysMass = _.union(getKeys(obj1), getKeys(obj2));
  const last = _.sortBy(keysMass);
  return last.map((key) => {
    const obj1HasKey = _.has(obj1, key);
    const obj2HasKey = _.has(obj2, key);
    const obj1KeyIsObject = _.isPlainObject(obj1[key]);
    const obj2KeyIsObject = _.isPlainObject(obj2[key]);
    if (obj1HasKey && obj2HasKey && obj1KeyIsObject && obj2KeyIsObject) {
      return {
        type: 'parent',
        key,
        children: getDifferenceTree(obj1[key], obj2[key]),
      };
    } if (obj1HasKey && obj2HasKey && obj1KeyIsObject && !obj2KeyIsObject) {
      return {
        type: 'diffValue',
        key,
        children: obj1[key],
        children2: obj2[key],
      };
    } if (obj1HasKey && obj2HasKey && !obj1KeyIsObject && obj2KeyIsObject) {
      return {
        type: 'diffValue',
        key,
        children: obj1[key],
        children2: obj2[key],
      };
    } if (obj1HasKey && !obj2HasKey && obj1KeyIsObject) {
      return {
        type: 'deleted',
        key,
        children: obj1[key],
      };
    } if (!obj1HasKey && obj2HasKey && obj2KeyIsObject) {
      return {
        type: 'added',
        key,
        children: obj2[key],
      };
    } if (obj1HasKey && obj2HasKey) {
      if (obj1[key] === obj2[key]) {
        return {
          type: 'stay same',
          key,
          children: obj1[key],
        };
      }
      return {
        type: 'diffValue',
        key,
        children: obj1[key],
        children2: obj2[key],
      };
    } if (obj1HasKey && !obj2HasKey) {
      return {
        type: 'deleted',
        key,
        children: obj1[key],
      };
    }
    return {
      type: 'added',
      key,
      children: obj2[key],
    };
  });
};
export default getDifferenceTree;
