const makeArrayOfObjectsUnique = (arr, comparedKey) => {
  const uniqueArray = [];
  const keysSet = new Set();
  for (let i = 0; i < arr.length; i += 1) {
    const key = arr[i][comparedKey];
    if (!keysSet.has(key)) {
      keysSet.add(key);
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
};

module.exports = makeArrayOfObjectsUnique;
