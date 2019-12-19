const {bisect, polyfill} = require('./bisect.js');

test('Bisect numbers into evens and odds', () => expect(bisect([1, 2, 3, 4, 5, 6, 7, 8, 9], n => n % 2)).toStrictEqual([[1, 3, 5, 7, 9], [2, 4, 6, 8]]));

test('Apply polyfill and bisect into evens and odds', () => {
  polyfill();

  expect([1, 2, 3, 4, 5, 6, 7, 8, 9].bisect(n => n % 2)).toStrictEqual([[1, 3, 5, 7, 9], [2, 4, 6, 8]]);
});
