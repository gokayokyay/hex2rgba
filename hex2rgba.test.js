const hex2rgba = require('./hex2rgba');

test('given a hex should return equivalent rgba', () => {
  expect(hex2rgba('#FF00FF', 0.2)).toBe('rgba(255, 0, 255, .2)');
});

test('given a shorthanded hex should return equivalent rgba', () => {
  expect(hex2rgba('#F0F', 0.5)).toBe('rgba(255, 0, 255, .5)');
});

test('given a hex without hash should return equivalent rgba', () => {
  expect(hex2rgba('FFEEFF', 0.2)).toBe('rgba(255, 238, 255, .2)');
});

test('given a shorthanded hex without hash should return equivalent rgba', () => {
  expect(hex2rgba('F0F', 0.5)).toBe('rgba(255, 0, 255, .5)');
});


test('if hex length is not valid should throw hex error', () => {
  expect(() => {
    hex2rgba('F0FF', 1);
  }).toThrow();
});

test('if hex is not valid should throw hex error', () => {
  expect(() => {
    hex2rgba('FRF', 1);
  }).toThrow();
});

test('if alpha is bigger than 1 should throw alpha error', () => {
  expect(() => {
    hex2rgba('FFF', 2);
  }).toThrow();
});

test('if alpha is smaller than 0 should throw alpha error', () => {
  expect(() => {
    hex2rgba('FFF', -1);
  }).toThrow();
});