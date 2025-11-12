/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB } from "../interfaces/color-spaces.interface";
/**
 * Converts a decimal numerical value in to a hex string
 * @param {number}                   - decimal
 * @returns {string}                 - hex
 */
export declare const decimalToHex: (d: string | number) => string;
/**
 * Converts a numerical value in a sRBG
 * @param {number}                  - numerical color value
 * @returns {RBG}                   - sRBG color value
 */
export declare const numberToRGB: (color: number) => RGB;
