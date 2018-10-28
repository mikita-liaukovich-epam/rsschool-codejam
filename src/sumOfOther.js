module.exports = function sumOfOther(arr) {
    let tempArr = arr.slice();
    let result = [];
    const reducer = (prevVal, curVal) => prevVal + curVal;
    for (let i = 0; i < arr.length; i++) {
        tempArr.splice(i, 1);
        result.push(tempArr.reduce(reducer));
        tempArr = arr.slice();
    }
    return result;
}