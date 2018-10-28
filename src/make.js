module.exports = function make(a) {
  function func(b) {
    let result = 0;
    if (typeof b !== 'function') {
      result = Array.from(arguments).reduce((acc, item) => acc + item);
    }
    return make(result + a);
  }
  func.valueOf = () => a;
  return func;
};
const sum = (prev, next) => prev + next;
