/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB } from "../interfaces/color-spaces.interface";
/**
 * Parses a hex color string into RGB format
 * @param {string} cssString - CSS hex color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export declare const parseHex: (cssString: string) => RGB | null;
/**
 * Parses an RGB color string into RGB format
 * @param {string} cssString - CSS RGB color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export declare const parseRgb: (cssString: string) => RGB | null;
/**
 * Parses an HSL color string into RGB format
 * @param {string} cssString - CSS HSL color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export declare const parseHsl: (cssString: string) => RGB | null;
/**
 * Parses an HWB color string into RGB format
 * @param {string} cssString - CSS HWB color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export declare const parseHwb: (cssString: string) => RGB | null;
/**
 * Parses a LAB color string into RGB format
 * @param {string} cssString - CSS LAB color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export declare const parseLab: (cssString: string) => RGB | null;
/**
 * Parses an LCH color string into RGB format
 * @param {string} cssString - CSS LCH color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export declare const parseLch: (cssString: string) => RGB | null;
/**
 * Parses an OKLAB color string into RGB format
 * @param {string} cssString - CSS OKLAB color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export declare const parseOklab: (cssString: string) => RGB | null;
/**
 * Parses an OKLCH color string into RGB format
 * @param {string} cssString - CSS OKLCH color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export declare const parseOklch: (cssString: string) => RGB | null;
/**
 * Parses any CSS color string into RGB format
 * @param {string} cssString - CSS color string
 * @returns {RGB | null} RGB color or null if invalid
 */
export declare const fromCssString: (cssString: string) => RGB | null;
