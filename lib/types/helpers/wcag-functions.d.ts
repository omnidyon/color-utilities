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
export declare const getLuminance: (rgb: RGB) => number;
/**
 * Calculates WCAG contrast ratio between two colors
 * @param {RGB} color1 - First color (sRGB)
 * @param {RGB} color2 - Second color (sRGB)
 * @returns {number} Contrast ratio (1-21)
 */
export declare function contrastRatio(color1: RGB, color2: RGB): number;
/**
 * Checks if color pair meets WCAG accessibility standards
 * @param {RGB} textColor - Text color
 * @param {RGB} backgroundColor - Background color
 * @param {string} level - WCAG level ('AA' or 'AAA')
 * @param {string} size - Text size ('normal' or 'large')
 * @returns {boolean} True if accessible
 */
export declare function isAccessible(
  textColor: RGB,
  backgroundColor: RGB,
  level?: "AA" | "AAA",
  size?: "normal" | "large",
): boolean;
