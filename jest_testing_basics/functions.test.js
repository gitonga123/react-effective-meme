const functions = require('./functions');

test('should add 2 + 2 and result 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT EQUAL 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});
