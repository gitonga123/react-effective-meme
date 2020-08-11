module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    setTimeout(
      () =>
        callback(
          new Error(
            `Rectangle dimensions should be greater than zero = ${x} and y = ${y}`
          ),
          null
        ),
      2000
    );
  } else {
    setTimeout(() => callback(null, {
        perimeter: () => 2 * (x + y),
        area: () => x * y,
      }), 1000);
  }
};


// exports.perimeter = (x, y) => (2 * (x + y));
// exports.area = (x, y) => (x * y);
// exports.rect;
