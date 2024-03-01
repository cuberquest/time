/**
 * Decode time `numbers` and `strings`
 * @param {number} time
 * @returns {string}
 */
function decode(time) {
  const s = Math.floor(time / 1000),
  m = Math.floor(s / 60),
  h = Math.floor(m / 60),
  htz = h - new Date().getTimezoneOffset() / 60,
  ms = time - s * 1000;
  return `${
    `${htz % 12}`.padStart(2, "0")
  }:${
    `${m % 60}`.padStart(2, "0")
  }:${
    `${s % 60}`.padStart(2, "0")
  }.${
    `${ms}`.padStart(3, "0")
  }`;
}