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
 * Generates a color scale between multiple colors
 * @param colors - Array of RGB colors to interpolate between
 * @param steps - Number of colors in the output scale
 * @param space - Color space for interpolation
 * @returns Array of RGB colors forming the scale
 */
export const createScale = (
  colors: RGB[],
  steps: number,
  space: "rgb" | "hsl" | "lab" = "rgb"
): RGB[] => {
  if (colors.length < 2 || steps < 2) return [...colors];

  const scale: RGB[] = [];
  const segments = colors.length - 1;
  const colorsPerSegment = (steps - 1) / segments;

  for (let i = 0; i < segments; i++) {
    const segmentSteps =
      i === segments - 1
        ? steps - scale.length
        : Math.ceil(colorsPerSegment) + 1;

    for (let j = 0; j < segmentSteps; j++) {
      if (i > 0 && j === 0) continue; // Avoid duplicates

      const t = j / (segmentSteps - 1);
      scale.push(interpolate(colors[i], colors[i + 1], t, space));
    }
  }

  return scale;
}

/**
 * Linear interpolation between two colors in specified color space
 * @param color1 - First color in RGB format
 * @param color2 - Second color in RGB format
 * @param t - Interpolation factor (0-1)
 * @param space - Color space for interpolation ('rgb', 'hsl', 'lab')
 * @returns Interpolated color in RGB format
 */
export const interpolate = ( 
  color1: RGB,
  color2: RGB,
  t: number,
  space: "rgb" | "hsl" | "lab" = "rgb"
): RGB => {
  t = Math.max(0, Math.min(1, t));

  switch (space) {
    case "hsl":
      const hsl1 = sRgbToHsl(color1);
      const hsl2 = sRgbToHsl(color2);
      // Handle hue wrapping for shortest path
      let hueDiff = hsl2.hue - hsl1.hue;
      if (Math.abs(hueDiff) > 180) {
        hueDiff = hueDiff > 0 ? hueDiff - 360 : hueDiff + 360;
      }
      return hslToRgb({
        hue: (hsl1.hue + hueDiff * t + 360) % 360,
        saturation: hsl1.saturation + (hsl2.saturation - hsl1.saturation) * t,
        lightness: hsl1.lightness + (hsl2.lightness - hsl1.lightness) * t,
      });

    case "lab":
      const lab1 = sRgbToLab(color1);
      const lab2 = sRgbToLab(color2);
      return labToSrgb({
        luminance: lab1.luminance + (lab2.luminance - lab1.luminance) * t,
        a: lab1.a + (lab2.a - lab1.a) * t,
        b: lab1.b + (lab2.b - lab1.b) * t,
      });

    case "rgb":
    default:
      return {
        red: Math.round(color1.red + (color2.red - color1.red) * t),
        green: Math.round(color1.green + (color2.green - color1.green) * t),
        blue: Math.round(color1.blue + (color2.blue - color1.blue) * t),
        inGamut: true,
      };
  }
}
