function bisect (a, b) {
  const polyfilled = Array.isArray(this);
  const predicate = polyfilled ? a : b;
  const array = polyfilled ? this : a;

  if (typeof predicate !== 'function') {
    throw new TypeError(`${predicate} is not a function`);
  }

  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not an array`);
  }

  const A = [];
  const B = [];

  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (predicate(el)) {
      A.push(el);
    } else {
      B.push(el);
    }
  }

  return [A, B];
}

function polyfill () {
  if (!Array.prototype.bisect) {
    Array.prototype.bisect = bisect;
  }
}

module.exports = {
  bisect,
  polyfill,
};
