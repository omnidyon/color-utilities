"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
// deno-lint-ignore no-unused-vars
const OKLCH_RANGES = {
  lightness: { min: 0, max: 1 }, // Perceived lightness (0=black, 1=white)
  chroma: { min: 0, max: 0.37 }, // Color intensity (0=gray, ~0.37=max saturation in sRGB)
  hue: { min: 0, max: 360 }, // Hue angle in degrees
};
// Common OKLCH values for reference
// deno-lint-ignore no-unused-vars
const OKLCH_REFERENCE_COLORS = {
  red: { lightness: 0.63, chroma: 0.25, hue: 29 },
  green: { lightness: 0.87, chroma: 0.16, hue: 142 },
  blue: { lightness: 0.45, chroma: 0.31, hue: 264 },
  white: { lightness: 1.0, chroma: 0, hue: 0 },
  black: { lightness: 0.0, chroma: 0, hue: 0 },
  gray: { lightness: 0.5, chroma: 0, hue: 0 },
};
