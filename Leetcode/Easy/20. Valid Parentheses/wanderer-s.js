/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const brakets = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const arr = [];
  for (let idx in s) {
    const char = s[idx];
    if (char === '(' || char === '{' || char === '[') {
      arr.push(char);
    } else {
      if (arr[arr.length - 1] === brakets[char]) {
        arr.pop();
      } else return false;
    }
  }
  return arr.length === 0;
};

// Runtime 60ms	Memory 40.7 MB
