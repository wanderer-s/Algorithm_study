/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-z\d]+/g, '');
  
   for(let i = 0; i < Math.floor(s.length / 2); i++) {
       if(s[i] !== s[Math.floor(s.length) - 1 -i]) {
           return false
      }
   }
  return true
}