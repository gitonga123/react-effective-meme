const chunkArray = require('./chunkarray');

test('should chuckArray function should exists', () => {
    expect(chunkArray).toBeDefined();
});

test('should chunk an array of 10 values with length of 2', () => {
  const numbers = [1, 2,3,4,5,6,7,8,10,11];
  const len = 2;

  const chunkedArray = chunkArray(numbers, len);

  expect(chunkedArray).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [10, 11]]);
})

