const reverseString = require('./reversestring');

test('should reverse should exists', () => {
  expect(reverseString).toBeDefined();
});

test('should test if string reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('should test if reverse with uppercase works', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});


