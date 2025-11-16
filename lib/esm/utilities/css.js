/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { hexToRgb } from "../conversions/hex-conversions";
import { hslToRgb } from "../conversions/hsl-conversions";
import { hwbToRgb } from "../conversions/hwb-conversions";
import { labToSrgb, oKLabToSRGB } from "../conversions/lab-conversions";
import { lch_abToLab, oKLCHToSRGB } from "../conversions/lch-conversions";
/**
 * Parses a hex color string into RGB format
 * @param {string} cssString - CSS hex color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export const parseHex = (cssString) => {
  if (!cssString?.startsWith("#")) {
    return null;
  }
  const hex = cssString.slice(1).trim();
  if (!/^[0-9a-f]{3,8}$/i.test(hex)) {
    return null;
  }
  return hexToRgb(hex);
};
/**
 * Parses an RGB color string into RGB format
 * @param {string} cssString - CSS RGB color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export const parseRgb = (cssString) => {
  const match = cssString.match(
    /^rgba?\(\s*([^,)\s]+)\s*[, ]\s*([^,)\s]+)\s*[, ]\s*([^,)\s]+)(?:\s*[,/]\s*([^)\s]+))?\s*\)$/i,
  );
  if (!match) {
    return null;
  }
  return {
    red: parseColorValue(match[1], 255),
    green: parseColorValue(match[2], 255),
    blue: parseColorValue(match[3], 255),
    inGamut: true,
  };
};
/**
 * Parses an HSL color string into RGB format
 * @param {string} cssString - CSS HSL color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export const parseHsl = (cssString) => {
  const match = cssString.match(
    /^hsla?\(\s*([^,)\s]+)\s*[, ]\s*([^,)\s]+)\s*[, ]\s*([^,)\s]+)(?:\s*[,/]\s*([^)\s]+))?\s*\)$/i,
  );
  if (!match) {
    return null;
  }
  const hsl = {
    hue: parseColorValue(match[1], 360),
    saturation: parsePercentage(match[2]),
    lightness: parsePercentage(match[3]),
  };
  return hslToRgb(hsl);
};
/**
 * Parses an HWB color string into RGB format
 * @param {string} cssString - CSS HWB color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export const parseHwb = (cssString) => {
  const match = cssString.match(
    /^hwb\(\s*([^,)\s]+)\s*[, ]\s*([^,)\s]+)\s*[, ]\s*([^,)\s]+)(?:\s*[,/]\s*([^)\s]+))?\s*\)$/i,
  );
  if (!match) {
    return null;
  }
  const hwb = {
    hue: parseColorValue(match[1], 360),
    whiteness: parsePercentage(match[2]),
    blackness: parsePercentage(match[3]),
  };
  return hwbToRgb(hwb);
};
/**
 * Parses a LAB color string into RGB format
 * @param {string} cssString - CSS LAB color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export const parseLab = (cssString) => {
  const match = cssString.match(/^lab\(\s*([^,)\s]+)\s*[, ]\s*([^,)\s]+)\s*[, ]\s*([^,)\s]+)\s*\)$/i);
  if (!match) {
    return null;
  }
  const lab = {
    luminance: parsePercentage(match[1]),
    a: parseFloat(match[2]),
    b: parseFloat(match[3]),
  };
  return labToSrgb(lab);
};
/**
 * Parses an LCH color string into RGB format
 * @param {string} cssString - CSS LCH color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export const parseLch = (cssString) => {
  const match = cssString.match(/^lch\(\s*([^,)\s]+)\s*[, ]\s*([^,)\s]+)\s*[, ]\s*([^,)\s]+)\s*\)$/i);
  if (!match) {
    return null;
  }
  const lch = {
    lightness: parsePercentage(match[1]),
    chroma: parseFloat(match[2]),
    hue: parseFloat(match[3]),
  };
  // Convert LCH -> LAB -> RGB using your existing functions
  const lab = lch_abToLab(lch);
  return labToSrgb(lab);
};
/**
 * Parses an OKLAB color string into RGB format
 * @param {string} cssString - CSS OKLAB color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export const parseOklab = (cssString) => {
  const match = cssString.match(/^oklab\(\s*([^,)\s]+)\s*[, ]\s*([^,)\s]+)\s*[, ]\s*([^,)\s]+)\s*\)$/i);
  if (!match) {
    return null;
  }
  const oklab = {
    luminance: parseFloat(match[1]),
    a: parseFloat(match[2]),
    b: parseFloat(match[3]),
  };
  return oKLabToSRGB(oklab);
};
/**
 * Parses an OKLCH color string into RGB format
 * @param {string} cssString - CSS OKLCH color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export const parseOklch = (cssString) => {
  const match = cssString.match(/^oklch\(\s*([^,)\s]+)\s*[, ]\s*([^,)\s]+)\s*[, ]\s*([^,)\s]+)\s*\)$/i);
  if (!match) {
    return null;
  }
  const oklch = {
    lightness: parseFloat(match[1]),
    chroma: parseFloat(match[2]),
    hue: parseFloat(match[3]),
  };
  return oKLCHToSRGB(oklch);
};
/**
 * Parses any CSS color string into RGB format
 * @param {string} cssString - CSS color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export const fromCssString = (cssString) => {
  if (!cssString) {
    return null;
  }
  const parsers = [parseHex, parseRgb, parseHsl, parseHwb, parseLab, parseLch, parseOklab, parseOklch];
  for (const parser of parsers) {
    const result = parser(cssString);
    if (result) {
      return result;
    }
  }
  return null;
};
/**
 * Parses a CSS color value, handling both absolute numbers and percentages
 * @param {string} value - The value to parse (e.g., "255", "50%")
 * @param {number} max - The maximum value for absolute numbers
 * @returns {number} Parsed numeric value
 */
const parseColorValue = (value, max) => {
  if (value.endsWith("%")) {
    return (parseFloat(value) * max) / 100;
  }
  return parseFloat(value);
};
/**
 * Parses a CSS percentage value, handling both percentage and number formats
 * @param {string} value - The value to parse (e.g., "50%", "0.5")
 * @returns {number} Parsed percentage value
 */
const parsePercentage = (value) => {
  return value.endsWith("%") ? parseFloat(value) : parseFloat(value);
};
