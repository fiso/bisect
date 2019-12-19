const {bisect, polyfill} = require('./bisect.js');

const evenOddPredicate = n => n % 2;
const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const bisectedDigits = [[1, 3, 5, 7, 9], [2, 4, 6, 8]];

test('Bisect numbers into evens and odds', () =>
  expect(bisect(digits, evenOddPredicate)).toStrictEqual(bisectedDigits));

test('Supplying non-array as first argument should throw a TypeError', () => {
  expect(() => {
    bisect('This is not an array', evenOddPredicate)
  }).toThrowError(TypeError);
});

test('Supplying non-function as second argument should throw a TypeError', () => {
  expect(() => {
    bisect(['This is  an array'])
  }).toThrowError(TypeError);
});

test('Apply polyfill and bisect into evens and odds', () => {
  polyfill();

  expect(digits.bisect(n => n % 2)).toStrictEqual(bisectedDigits);
});

test('Polyfilling a second time breaks nothing', () => {
  polyfill();

  expect(digits.bisect(n => n % 2)).toStrictEqual(bisectedDigits);
});
