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
export declare const isValidColor: (space: string, color: {
  [key: string]: number;
}) => boolean;
