/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { hslToRgb } from "../conversions/hsl-conversions";
import { labToSrgb } from "../conversions/lab-conversions";
import { sRgbToHsl, sRgbToLab } from "../conversions/rgb-conversions";
import { RGB } from "../interfaces/color-spaces.interface";

/**
 * Lightens a color by adjusting its luminance in LAB space
 * @param {RGB} rgb - Input color in RGB format
 * @param {number} amount - Amount to lighten (0-100 scale)
 * @returns {RGB} Lightened color in RGB format
 */
export const lighten = (rgb: RGB, amount: number): RGB => {
  const lab = sRgbToLab(rgb);
  const newLuminance = Math.min(100, Math.max(0, lab.luminance + amount));
  return labToSrgb({ ...lab, luminance: newLuminance });
}

/**
 * Darkens a color by adjusting its luminance in LAB space
 * @param {RGB} rgb - Input color in RGB format
 * @param {number} amount - Amount to darken (0-100 scale)
 * @returns {RGB} Darkened color in RGB format
 */
export function darken(rgb: RGB, amount: number): RGB {
  return lighten(rgb, -amount);
}

/**
 * Saturates a color by adjusting saturation in HSL space
 * @param {RGB} rgb - Input color in sRGB format
 * @param {number} amount - Amount to saturate (-100 to 100 scale)
 * @returns {RGB} Saturated color in sRGB format
 */
export const saturate = (rgb: RGB, amount: number): RGB => {
  const hsl = sRgbToHsl(rgb);
  const newSaturation = Math.min(100, Math.max(0, hsl.saturation + amount));
  return hslToRgb({ ...hsl, saturation: newSaturation });
}

/**
 * Desaturates a color by reducing saturation in HSL space
 * @param {RGB} rgb - Input color in sRGB format
 * @param {number} amount - Amount to desaturate (0-100 scale)
 * @returns {RGB} Desaturated color in RGB format
 */
export function desaturate(rgb: RGB, amount: number): RGB {
  return saturate(rgb, -amount);
}

/**
 * Adjusts color hue by rotating around the color wheel
 * @param {RGB} rgb - Input color in RGB format
 * @param {number} degrees - Degrees to rotate hue (-360 to 360)
 * @returns {RGB} Color with adjusted hue
 */
export function adjustHue(rgb: RGB, degrees: number): RGB {
  const hsl = sRgbToHsl(rgb);
  let newHue = (hsl.hue + degrees) % 360;
  if (newHue < 0) newHue += 360;
  return hslToRgb({ ...hsl, hue: newHue });
}

/**
 * Creates a complementary color (180° hue rotation)
 * @param {RGB} rgb - Input color in sRGB format
 * @returns {RGB} Complementary color
 */
export function complement(rgb: RGB): RGB {
  return adjustHue(rgb, 180);
}

/**
 * Mixes two colors by weighted average in sRGB space
 * @param {RGB} color1 - First color
 * @param {RGB} color2 - Second color
 * @param {number} weight - Weight of first color (0-1, default 0.5)
 * @returns {RGB} Mixed color
 */
export function mix(color1: RGB, color2: RGB, weight = 0.5): RGB {
  const w = Math.max(0, Math.min(1, weight));
  return {
    red: Math.round(color1.red * w + color2.red * (1 - w)),
    green: Math.round(color1.green * w + color2.green * (1 - w)),
    blue: Math.round(color1.blue * w + color2.blue * (1 - w)),
    inGamut: true,
  };
}



