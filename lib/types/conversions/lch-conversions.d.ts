/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { LAB, LCH, LUV, XYZ, RGB } from '../interfaces/color-spaces.interface';
/**
 * Converts a color from LCH(ab) color space to LAB color space
 * @param {LCH}                   - Lch(ab) color value
 * @returns {LAB}                 - lab color value
 */
export declare const lch_abToLab: ({ lightness, chroma, hue }: LCH) => LAB;
/**
 * Converts a color from LCH(ab) color space to LUV color space
 * @param {LCH}                   - Lch(uv) color value
 * @returns {LUV}                 - luv color value
 */
export declare const lch_uvToLuv: ({ lightness, chroma, hue }: LCH) => LUV;
/**
 * Converts a color from LCH(ab) color space to XYZ
 * @param {LCH}                   - Lch(ab) color value
 * @returns {XYZ}                 - xyz value
 */
export declare const lch_abToXyz: (lch: LCH) => XYZ;
/**
 * Converts a color from LCH(uv) color space to XYZ
 * @param {LCH}                   - Lch(uv) color value
 * @returns {XYZ}                 - xyz value
 */
export declare const lch_uvToXyz: (lch: LCH) => XYZ;
/**
 * Converts a color from OKLCH color space to OKLab
 *
 * @param {LCH} oklch              - OKLCH color object to convert
 * @returns {LAB}                  - OKLab color object with L, A, B components
 */
export declare const OKLCHToOKLab: (oklch: LCH) => LAB;
/**
 * Converts a color from OKLCH color space to sRGB
 *
 * @param {LCH} oklch              - OKLCH color object to convert
 * @returns {RGB}                  - sRGB color object
 */
export declare const oKLCHToSRGB: (oklch: LCH) => RGB;
/**
 * Checks if an OKLCH color is within the sRGB gamut
 *
 * @param {LCH}                    - OKLCH color object with lightness, chroma, and hue
 * @returns {boolean}              - true if color is within sRGB gamut, false otherwise
 */
export declare const isOKLCHInGamut: ({ lightness, chroma, hue }: LCH) => boolean;
