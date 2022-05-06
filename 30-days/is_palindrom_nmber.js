var isPalindrome = function (x) {
  let x_string = String(x);
  let list = [];
  for (let c of x_string) {
    list.push(c);
  }

  let x_length = x_string.length - 1;
  let rev_x = "";
  while (x_length >= 0) {
      console.log(x_string[x_length]);
    rev_x += x_string[x_length];
    x_length -= 1;
  }
  return x_string == rev_x;
};


var isPalindromeRecursion = function (x) {
    const s = x.toString();
    if (s.length === 1) {
        return true;
    }
    const start = s[0];
    const end = s[s.length - 1];
    if (start !== end) {
        return false;
    }
    if (s.length === 2) {
        return true;
    }
    const subStr = s.substring(1, s.length - 1);
    return isPalindrome(subStr);
}
console.log(isPalindromeRecursion(-121));
