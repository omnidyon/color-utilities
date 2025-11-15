/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { sRgbToHex, sRgbaToHex } from "../conversions/rgb-conversions";
import { RGB, RGBA } from "../interfaces/color-spaces.interface";
import { MixerOptions } from "../interfaces/mixer.interface";

/**
 * Creates an incremented color pallet
 * @param {RGB}                   - data for the original color
 * @param {number}                - amount of colors to generate
 * @param {number}                - the number by which to increment
 * @returns {string[]}            - array of colors in hex format
 */
const scale = (
  rgb: RGB | RGBA,
  size: number,
  scale: number,
  prefixed?: boolean
): string[] => {
  let { red, green, blue } = rgb;
  const scaled = [];

  const normRed = red / 255;
  const normGreen = green / 255;
  const normBlue = blue / 255;

  const scaleR = (scale - normRed) / size;
  const scaleG = (scale - normGreen) / size;
  const scaleB = (scale - normBlue) / size;

  let currentRed = normRed;
  let currentGreen = normGreen;
  let currentBlue = normBlue;

  for (let i = 0; i < size; i++) {
    const resultRGB = {
      red: Math.round(currentRed * 255),
      green: Math.round(currentGreen * 255),
      blue: Math.round(currentBlue * 255),
    };

    if ("alpha" in rgb && rgb.alpha !== undefined) {
      scaled.push(sRgbaToHex({ ...resultRGB, alpha: rgb.alpha }, prefixed));
    } else {
      scaled.push(sRgbToHex(resultRGB, prefixed));
    }

    currentRed += scaleR;
    currentGreen += scaleG;
    currentBlue += scaleB;
  }

  return scaled;
};

/**
 * Creates an pallet of shades by mixing a given color
 * with black (#000000)
 * @param {RGB}                   - data for the original color
 * @param {MixerOptions}          - options for generating the pallet:
 *                                - size: how many colors to generate
 *                                - prefixed: should the return values start with #
 * @returns {string[]}            - array of shades in hex format
 */
export const getShades = (
  rgb: RGB | RGBA,
  options?: MixerOptions
): string[] => {
  const size: number =
    !options?.size || !isFinite(options?.size as number)
      ? 10
      : (options?.size as number);

  return scale(rgb, size, 0, options?.prefixed);
};

/**
 * Creates an pallet of tints by mixing a given color
 * with white (#FFFFFF)
 * @param {RGB}                   - data for the original color
 * @param {MixerOptions}          - options for generating the pallet:
 *                                - size: how many colors to generate
 *                                - prefixed: should the return values start with #
 * @returns {string[]} - array of tints in hex format
 */
export const getTints = (rgb: RGB | RGBA, options?: MixerOptions): string[] => {
  const size: number =
    !options?.size || !isFinite(options?.size as number)
      ? 10
      : (options?.size as number);

  return scale(rgb, size, 1, options?.prefixed);
};

/**
 * Creates an pallet of tones by mixing a given color
 * with gray (#777777)
 * @param {RGB}                   - data for the original color
 * @param {MixerOptions}          - options for generating the pallet:
 *                                - size: how many colors to generate
 *                                - prefixed: should the return values start with #
 * @returns {string[]} - array of tones in hex format
 */
export const getTones = (rgb: RGB | RGBA, options?: MixerOptions): string[] => {
  const size: number =
    !options?.size || !isFinite(options?.size as number)
      ? 10
      : (options?.size as number);

  return scale(rgb, size, 0.5, options?.prefixed);
};
