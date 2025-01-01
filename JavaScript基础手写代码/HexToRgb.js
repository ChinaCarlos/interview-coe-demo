const HexToRgb = (hex) => {
  const hexRegExp = /^#([0-9a-fA-f]{3}){1,2}$/;
  if (!hexRegExp.test(hex)) return null;

  let hexChar = hex.slice(1);

  if (hexChar.length === 3) {
    hexChar = hexChar
      .split("")
      .map((char) => char + char)
      .join("");
  }
  console.log("hexChar:", hexChar);
  const r = parseInt(hexChar.slice(0, 2), 16);
  const g = parseInt(hexChar.slice(2, 4), 16);
  const b = parseInt(hexChar.slice(4, 6), 16);

  return `rgb(${r},${g},${b})`;
};

console.log(HexToRgb("#fff"));
console.log(HexToRgb("#eeeeee"));
console.log(HexToRgb("#ff5733"));

const rgbToHex = (r, g, b) => {
  if (r < 0 || r > 255 || g < 0 || g > 255 || g < 0 || g > 255) {
    throw Error("error");
  }

  const toHex = (num) => {
    return num.toString(16).padStart(2, "0");
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

console.log(rgbToHex(0, 0, 0));
