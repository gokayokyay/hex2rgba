function hex2rgba(hex, alpha) {
  // Check for hex errors
  let hexError = new Error('Invalid HEX received.');
  let withoutHash = hex.replace('#', '');
  if (![3, 6].includes(withoutHash.length)) {
    throw hexError;
  }
  withoutHash.length === 3 ? 
    withoutHash = withoutHash.match(/.{1}/g).map(n => `${n}${n}`) :
    withoutHash = withoutHash.match(/.{1,2}/g);
  const integerValues = withoutHash.map(n => parseInt(n, 16));
  if (integerValues.includes(NaN)) {
    throw hexError;
  }
  // Check for alpha errors
  let alphaError = new Error('Invalid Alpha received.');
  let floatAlpha = parseFloat(alpha);
  let stringAlpha = floatAlpha;
  if (typeof floatAlpha !== "number" || floatAlpha > 1 || floatAlpha < 0) {
    throw alphaError;
  }
  if (floatAlpha < 1 && floatAlpha !== 0) {
    stringAlpha = floatAlpha.toString().substring(1);
  }
  return `rgba(${integerValues[0]}, ${integerValues[1]}, ${integerValues[2]}, ${stringAlpha})`;
}

/*

  RegEx çok hakim değilim ama one liner çözümü
  function hexToRGBA(hex, opacity) {
    return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(opacity||1).join(',') + ')';
  }
  kaynak: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

*/

module.exports = hex2rgba;