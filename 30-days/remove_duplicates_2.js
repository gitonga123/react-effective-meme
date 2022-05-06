/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var removeDuplicates = function(s, k) {
    if (s.length === 0 || s.length < k) {
        return s;
    }
    const stack = [];
    
    for(let char of s) {
        if(stack.length && stack[stack.length-1][0] === char) {
            stack[stack.length-1][1] += 1;
            if(stack[stack.length-1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([char, 1]);
        }
    }
    
    let res = '';
    
    for(let [char, count] of stack) {
        res += char.repeat(count);
    }
    
    return res;
};

module.exports = removeDuplicates;