/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  const strNum = num + '';
  const strNumArray = strNum.split('');
  if (strNumArray.length === 1) return num;

  return addDigits(
    strNumArray.reduce((sum, n) => {
      sum += parseInt(n);
      return sum;
    }, 0)
  );
};
