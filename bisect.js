function bisect (array, predicate) {
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
    Array.prototype.bisect = function (predicate) {
      return bisect(this, predicate);
    };
  }
}

module.exports = {
  bisect,
  polyfill,
};
