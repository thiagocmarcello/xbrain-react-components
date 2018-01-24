const rgbToHex = (r, g, b) =>
  `#${[r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    })
    .join('')}`;

const hexToRgb = (hex) => {
  if (typeof hex !== 'string') return '';

  return hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16))
    .join(', ');
};

export { rgbToHex, hexToRgb };
