/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB } from "../interfaces/color-spaces.interface";
/**
 * Generates a color scale between multiple colors
 * @param colors - Array of RGB colors to interpolate between
 * @param steps - Number of colors in the output scale
 * @param space - Color space for interpolation
 * @returns Array of RGB colors forming the scale
 */
export declare const createScale: (colors: RGB[], steps: number, space?: "rgb" | "hsl" | "lab") => RGB[];
/**
 * Linear interpolation between two colors in specified color space
 * @param color1 - First color in RGB format
 * @param color2 - Second color in RGB format
 * @param t - Interpolation factor (0-1)
 * @param space - Color space for interpolation ('rgb', 'hsl', 'lab')
 * @returns Interpolated color in RGB format
 */
export declare const interpolate: (color1: RGB, color2: RGB, t: number, space?: "rgb" | "hsl" | "lab") => RGB;
