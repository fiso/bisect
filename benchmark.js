const bisect = require('./bisect');

const evenOddPredicate = n => n % 2;
const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const iterations = 100000000;
let start, time;

start = process.hrtime();
for (let i = 0; i < iterations; i++) {
  bisect.bisect(digits, evenOddPredicate);
}
time = process.hrtime(start);
console.log(`${iterations} iterations took ${time[0]}.${time[1]}s`);
