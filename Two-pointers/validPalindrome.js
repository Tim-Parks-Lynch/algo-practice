function validPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] === str[end]) {
      start += 1;
      end -= 1;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = {
  validPalindrome,
};
