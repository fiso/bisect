# Bisect

[![Build Status](https://travis-ci.com/fiso/bisect.svg?branch=master)](https://travis-ci.com/fiso/bisect)
[![Coverage Status](https://coveralls.io/repos/github/fiso/bisect/badge.svg?branch=master&cachebust=1)](https://coveralls.io/github/fiso/bisect?branch=master)

Splits an array into two halves, as determined by a predicate function.

Returns an array of length 2 with the the array of elements that passed the predicate as its first element, and the array of elements that did not pass as the second.

## Usage

```js
const {bisect} = require('bisect');

const [odds, evens] = bisect([1, 2, 3, 4, 5, 6, 7, 8, 9], n => n % 2);
console.log(odds, evens);
// [ 1, 3, 5, 7, 9 ] [ 2, 4, 6, 8 ]

const [binary, nonbinary] = bisect([
  {name: 'Jill Stevens', gender: 'f'},
  {name: 'Lars Björkblom', gender: 'm'},
  {name: 'Kim Carlsen', gender: 'n'},
  {name: 'Autumn Bix', gender: 'n'},
], person => ['m', 'f'].some(gender => gender === person.gender));
console.log(binary, nonbinary);
/*
[
  { name: 'Jill Stevens', gender: 'f' },
  { name: 'Lars Björkblom', gender: 'm' }
] [
  { name: 'Kim Carlsen', gender: 'n' },
  { name: 'Autumn Bix', gender: 'n' }
]
*/
```

## Polyfill

Also available as a polyfill that modifies Array.prototype.

```js
const bisect = require('bisect');

bisect.polyfill();

const [odds, evens] = [1, 2, 3, 4, 5, 6, 7, 8, 9].bisect(n => n % 2);
console.log(odds, evens);
// [ 1, 3, 5, 7, 9 ] [ 2, 4, 6, 8 ]
```
