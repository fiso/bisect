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
  return array.reduce((acc, val) => {
    const matches = predicate(val);
    return [
      [...acc[0], ...matches ? [val] : []],
      [...acc[1], ...matches ? [] : [val]],
    ];
  }, [[], []]);
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
