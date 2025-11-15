/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

/**
 * Validates if a color object matches the expected structure and value ranges for a given color space
 * @param {string} space - The color space to validate against
 * @param {object} color - The color object to validate
 * @returns {boolean} True if the color is valid for the specified space
 */
export const isValidColor = (space: string, color: {[key: string]: number}): boolean => {
  if (!color || typeof color !== 'object') return false;
  
  const validators = {
    // RGB family
    rgb: (c: {[key: string]: number}) => hasProps(c, ['red', 'green', 'blue']) && inRange(c.red, 0, 255) && inRange(c.green, 0, 255) && inRange(c.blue, 0, 255),
    rgb_m: (c: {[key: string]: number}) =>hasProps(c, ['r', 'g', 'b']) && inRange(c.r, 0, 255) && inRange(c.g, 0, 255) && inRange(c.b, 0, 255),
    rgba: (c: {[key: string]: number}) =>hasProps(c, ['red', 'green', 'blue', 'alpha']) && inRange(c.red, 0, 255) && inRange(c.green, 0, 255) && inRange(c.blue, 0, 255) && inRange(c.alpha, 0, 1),
    rgba_m: (c: {[key: string]: number}) =>hasProps(c, ['r', 'g', 'b', 'a']) && inRange(c.r, 0, 255) && inRange(c.g, 0, 255) && inRange(c.b, 0, 255) && inRange(c.a, 0, 1),
    // HSL/HSV family
    hsl: (c: {[key: string]: number}) =>hasProps(c, ['hue', 'saturation', 'lightness']) && inRange(c.hue, 0, 360) && inRange(c.saturation, 0, 100) && inRange(c.lightness, 0, 100),
    hsl_m: (c: {[key: string]: number}) =>hasProps(c, ['h', 's', 'l']) && inRange(c.h, 0, 360) && inRange(c.s, 0, 100) && inRange(c.l, 0, 100),
    hsv: (c: {[key: string]: number}) =>hasProps(c, ['hue', 'saturation', 'value']) && inRange(c.hue, 0, 360) && inRange(c.saturation, 0, 100) && inRange(c.value, 0, 100),
    hsv_m: (c: {[key: string]: number}) =>hasProps(c, ['h', 's', 'v']) && inRange(c.h, 0, 360) && inRange(c.s, 0, 100) && inRange(c.v, 0, 100),
    hsla: (c: {[key: string]: number}) =>hasProps(c, ['hue', 'saturation', 'lightness', 'alpha']) && inRange(c.hue, 0, 360) && inRange(c.saturation, 0, 100) && inRange(c.lightness, 0, 100) && inRange(c.alpha, 0, 1),
    hsva: (c: {[key: string]: number}) =>hasProps(c, ['hue', 'saturation', 'value', 'alpha']) && inRange(c.hue, 0, 360) && inRange(c.saturation, 0, 100) && inRange(c.value, 0, 100) && inRange(c.alpha, 0, 1),
    // CMYK/CMY
    cmy: (c: {[key: string]: number}) =>hasProps(c, ['cyan', 'magenta', 'yellow']) && inRange(c.cyan, 0, 100) && inRange(c.magenta, 0, 100) && inRange(c.yellow, 0, 100),
    cmy_m: (c: {[key: string]: number}) =>hasProps(c, ['c', 'm', 'y']) && inRange(c.c, 0, 100) && inRange(c.m, 0, 100) && inRange(c.y, 0, 100),
    cmyk: (c: {[key: string]: number}) =>hasProps(c, ['cyan', 'magenta', 'yellow', 'key']) && inRange(c.cyan, 0, 100) && inRange(c.magenta, 0, 100) && inRange(c.yellow, 0, 100) && inRange(c.key, 0, 100),
    cmyk_m: (c: {[key: string]: number}) =>hasProps(c, ['c', 'm', 'y', 'k']) && inRange(c.c, 0, 100) && inRange(c.m, 0, 100) && inRange(c.y, 0, 100) && inRange(c.k, 0, 100),
    // LAB/LCH
    lab: (c: {[key: string]: number}) =>hasProps(c, ['luminance', 'a', 'b']) && inRange(c.luminance, 0, 100),
    lab_m: (c: {[key: string]: number}) =>hasProps(c, ['l', 'a', 'b']) && inRange(c.l, 0, 100),
    lch: (c: {[key: string]: number}) =>hasProps(c, ['lightness', 'chroma', 'hue']) && inRange(c.lightness, 0, 100) && inRange(c.hue, 0, 360),
    lch_m: (c: {[key: string]: number}) =>hasProps(c, ['l', 'c', 'h']) && inRange(c.l, 0, 100) && inRange(c.h, 0, 360),
    // Other color spaces
    hcl: (c: {[key: string]: number}) =>hasProps(c, ['hue', 'chroma', 'luminance']) && inRange(c.hue, 0, 360) && inRange(c.luminance, 0, 100),
    hcl_m: (c: {[key: string]: number}) =>hasProps(c, ['h', 'c', 'l']) && inRange(c.h, 0, 360) && inRange(c.l, 0, 100),
    hcy: (c: {[key: string]: number}) =>hasProps(c, ['hue', 'chroma', 'Yluminance']) && inRange(c.hue, 0, 360),
    hcy_m: (c: {[key: string]: number}) =>hasProps(c, ['h', 'c', 'y']) && inRange(c.h, 0, 360),
    hsi: (c: {[key: string]: number}) =>hasProps(c, ['hue', 'saturation', 'intensity']) && inRange(c.hue, 0, 360) && inRange(c.saturation, 0, 100) && inRange(c.intensity, 0, 100),
    hwb: (c: {[key: string]: number}) =>hasProps(c, ['hue', 'whiteness', 'blackness']) && inRange(c.hue, 0, 360) && inRange(c.whiteness, 0, 100) && inRange(c.blackness, 0, 100),
    hwb_m: (c: {[key: string]: number}) =>hasProps(c, ['h', 'w', 'b']) && inRange(c.h, 0, 360) && inRange(c.w, 0, 100) && inRange(c.b, 0, 100),
    lms: (c: {[key: string]: number}) =>hasProps(c, ['long', 'medium', 'short']),
    luv: (c: {[key: string]: number}) =>hasProps(c, ['L', 'u', 'v']),
    ryb: (c: {[key: string]: number}) =>hasProps(c, ['red', 'yellow', 'blue']) && inRange(c.red, 0, 255) && inRange(c.yellow, 0, 255) && inRange(c.blue, 0, 255),
    ryb_m: (c: {[key: string]: number}) =>hasProps(c, ['r', 'y', 'b']) && inRange(c.r, 0, 255) && inRange(c.y, 0, 255) && inRange(c.b, 0, 255),
    tsl: (c: {[key: string]: number}) =>hasProps(c, ['tint', 'saturation', 'lightness']),
    uvw: (c: {[key: string]: number}) =>hasProps(c, ['u', 'v', 'w']),
    xvycc: (c: {[key: string]: number}) =>hasProps(c, ['Y', 'Cb', 'Cr']),
    xyy: (c: {[key: string]: number}) =>hasProps(c, ['x', 'y', 'Y']),
    xyz: (c: {[key: string]: number}) =>hasProps(c, ['x', 'y', 'z']),
    ycbcr: (c: {[key: string]: number}) =>hasProps(c, ['Y', 'Cb', 'Cr']),
    yccbccrc: (c: {[key: string]: number}) =>hasProps(c, ['Yc', 'Cbc', 'Crc']),
    ycocg: (c: {[key: string]: number}) =>hasProps(c, ['Y', 'Co', 'Cg']),
    ydbdr: (c: {[key: string]: number}) =>hasProps(c, ['Y', 'Db', 'Dr']),
    yiq: (c: {[key: string]: number}) =>hasProps(c, ['Y', 'I', 'Q']),
    ypbpr: (c: {[key: string]: number}) =>hasProps(c, ['Y', 'Pb', 'Pr']),
    yuv: (c: {[key: string]: number}) =>hasProps(c, ['y', 'u', 'v']),
    // String formats
    hex: (c: {[key: string]: number}) =>typeof c === 'string' && /^[0-9A-F]{3,6}$/i.test(c)
  };

  const validator = validators[space.toLowerCase() as keyof typeof validators];
  return validator ? validator(color) : false;
}

/**
 * Checks if an object has all required properties
 * @param {object} obj - The object to check
 * @param {string[]} props - Array of property names to verify
 * @returns {boolean} True if all properties exist
 */
const hasProps = (obj: {[key: string]: number}, props: string[]) => {
  return props.every(prop => prop in obj);
}

/**
 * Checks if a value is within a specified range
 * @param {number} value - The value to check
 * @param {number} min - Minimum allowed value
 * @param {number} max - Maximum allowed value
 * @returns {boolean} True if value is within range
 */
const inRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
}