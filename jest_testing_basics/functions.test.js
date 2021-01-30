const functions = require('./functions');

test('should add 2 + 2 and result to 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT EQUAL 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('should be truthy', () => {
    expect(functions.checkValue(4)).toBeTruthy();
})

test('should create user Daniel Mutwiri object', () => {
  expect(functions.createUser()).toEqual({
      firstName: 'Daniel',
      lastName: 'Mutwiri'
  });
})

test('should be under 1600', () => {
  expect(functions.add(800, 700)).toBeLessThan(1600);
});

test('should be less than or equal to 1600', () => {
    expect(functions.add(800, 800)).toBeLessThanOrEqual(1600);
});

// Test for regex

test('should match the regex. There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

// Arrays
test('should have admin in usernames', () => {
  expect(functions.usernameList()).toContain('admin');
});

// working with async data
test('should match user name Leanne Graham', async () => {    
    functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
})





