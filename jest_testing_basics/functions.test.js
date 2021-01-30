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
})

