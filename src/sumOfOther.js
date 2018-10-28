module.exports = function sumOfOther(arr) {
  let tempArr = arr.slice();
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    tempArr.splice(i, 1);
    result.push(tempArr.reduce((acc, item) => acc + item));
    tempArr = arr.slice();
  }
  return result;
};
