/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * Sanitizes a color by clamping values to valid ranges
 * @param space - The color space
 * @param color - The color object to sanitize
 * @returns Sanitized color or null if invalid
 */
export declare const sanitizeColor: (space: string, color: any) => any;
