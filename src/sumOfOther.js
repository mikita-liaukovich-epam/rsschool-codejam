module.exports = function sumOfOther(arr) {
  let tempArr = arr.slice();
  const result = [];
  const reducer = (prevVal, curVal) => prevVal + curVal;
  for (let i = 0; i < arr.length; i += 1) {
    tempArr.splice(i, 1);
    result.push(tempArr.reduce(reducer));
    tempArr = arr.slice();
  }
  return result;
};
