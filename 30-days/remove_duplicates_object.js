// The problem of using an object instead of a stack is that objects don't keep order;

const removeDuplicatesB = (s, k) => {
    let temp = {};
    for (let c of s) {
        
        if (c in temp) {
            if (temp[c] > k) {
                temp[c] = 1;
            } else {
                temp[c] = temp[c] + 1;
            }
            
        } else {
            temp[c] = 1;
        }

        if (temp[c] == k) {
            delete temp[c];
        }
    }

    let final_string='';
    for (let t in temp) {
        final_string += t.repeat(temp[t]);
    }

    return final_string;
};

module.exports = removeDuplicatesB;