/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
import { LAB, LCH } from "../interfaces/color-spaces.interface";
/**
 * Computes Delta E using the CIE94 algorithm
 * - more info: http://en.wikipedia.org/wiki/Color_difference#CIE94
 * @param {LAB}				- values for the first color
 * @param {LAB}				- values for the second color
 * @param {LCH}				- optional wight values
 * @returns {number}	    - color difference value
 */
export declare const deltaECIE94Lab: (lab1: LAB, lab2: LAB, weights?: LCH) => number;
