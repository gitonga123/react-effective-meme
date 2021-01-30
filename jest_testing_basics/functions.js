const { default: axios } = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    divide: (num1, num2) => num1 / num2,
    multiply: (num1, num2) => num1 * num2,
    isNul: () => null,
    checkValue: x => x,
    createUser: () => {
        const user =  {
            firstName: 'Daniel'
        };
        user['lastName'] = 'Mutwiri';
        return user;
    },
    usernameList: () => ['John', 'karen', 'admin'],
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => res.data).catch(err => 'error')
}

module.exports = functions;