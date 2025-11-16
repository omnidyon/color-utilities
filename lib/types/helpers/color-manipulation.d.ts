/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB } from "../interfaces/color-spaces.interface";
/**
 * Lightens a color by adjusting its luminance in LAB space
 * @param {RGB} rgb - Input color in RGB format
 * @param {number} amount - Amount to lighten (0-100 scale)
 * @returns {RGB} Lightened color in RGB format
 */
export declare const lighten: (rgb: RGB, amount: number) => RGB;
/**
 * Darkens a color by adjusting its luminance in LAB space
 * @param {RGB} rgb - Input color in RGB format
 * @param {number} amount - Amount to darken (0-100 scale)
 * @returns {RGB} Darkened color in RGB format
 */
export declare function darken(rgb: RGB, amount: number): RGB;
/**
 * Saturates a color by adjusting saturation in HSL space
 * @param {RGB} rgb - Input color in sRGB format
 * @param {number} amount - Amount to saturate (-100 to 100 scale)
 * @returns {RGB} Saturated color in sRGB format
 */
export declare const saturate: (rgb: RGB, amount: number) => RGB;
/**
 * Desaturates a color by reducing saturation in HSL space
 * @param {RGB} rgb - Input color in sRGB format
 * @param {number} amount - Amount to desaturate (0-100 scale)
 * @returns {RGB} Desaturated color in RGB format
 */
export declare function desaturate(rgb: RGB, amount: number): RGB;
/**
 * Adjusts color hue by rotating around the color wheel
 * @param {RGB} rgb - Input color in RGB format
 * @param {number} degrees - Degrees to rotate hue (-360 to 360)
 * @returns {RGB} Color with adjusted hue
 */
export declare function adjustHue(rgb: RGB, degrees: number): RGB;
/**
 * Creates a complementary color (180° hue rotation)
 * @param {RGB} rgb - Input color in sRGB format
 * @returns {RGB} Complementary color
 */
export declare function complement(rgb: RGB): RGB;
/**
 * Mixes two colors by weighted average in sRGB space
 * @param {RGB} color1 - First color
 * @param {RGB} color2 - Second color
 * @param {number} weight - Weight of first color (0-1, default 0.5)
 * @returns {RGB} Mixed color
 */
export declare function mix(color1: RGB, color2: RGB, weight?: number): RGB;
