/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { RGB } from "../interfaces/color-spaces.interface";

/**
 * Calculates the relative luminance of a color for WCAG contrast calculations
 * @param {RGB} rgb - Input color in RGB format
 * @returns {number} Relative luminance (0-1)
 */
export const getLuminance = (rgb: RGB): number => {
  const [r, g, b] = [rgb.red, rgb.green, rgb.blue].map(value => {
    value /= 255;
    return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

/**
 * Calculates WCAG contrast ratio between two colors
 * @param {RGB} color1 - First color (sRGB)
 * @param {RGB} color2 - Second color (sRGB)
 * @returns {number} Contrast ratio (1-21)
 */
export function contrastRatio(color1: RGB, color2: RGB): number {
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
/**
 * Checks if color pair meets WCAG accessibility standards
 * @param {RGB} textColor - Text color
 * @param {RGB} backgroundColor - Background color
 * @param {string} level - WCAG level ('AA' or 'AAA')
 * @param {string} size - Text size ('normal' or 'large')
 * @returns {boolean} True if accessible
 */
export function isAccessible(
  textColor: RGB,
  backgroundColor: RGB,
  level: 'AA' | 'AAA' = 'AA',
  size: 'normal' | 'large' = 'normal'
): boolean {
  const ratio = contrastRatio(textColor, backgroundColor);
  const requirements = {
    'AA': { 'normal': 4.5, 'large': 3 },
    'AAA': { 'normal': 7, 'large': 4.5 }
  };
  
  return ratio >= requirements[level][size];
}