/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
export const MAX_DECIMALS = 6;
//Actual CIE standard
export const CIE_ϵ = 0.008856;
export const CIE_κ = 903.3;
//ITU-R BT.2020-2
export const Pb = 0.791;
export const Pr = 0.4969;
export const Nb = -0.9702;
export const Nr = -0.8591;
//ITU-R BT.2020
export const Kr = 0.2627;
export const Kg = 0.678;
export const Kb = 0.0593;
export const NOT_PERCEPTIBLE_BY_HUMAN_EYE = 1;
export const PERCEPTIBLE_THROUGH_CLOSE_OBSERVATION = 2;
export const PERCEPTIBLE_AT_A_GLANCE = 10;
export const MORE_CLOSE_THEN_OPPOSITE = 49;
export const EXACT_OPPOSITE = 100;
export const SRGB_INVERSE_NORMALIZED_BELOW = 0.04045;
export const SRGB_NORMALIZED_BELOW = 0.0031308;
export const L_INVERSE_NORMALIZED_BELOW = 0.08;
export const OKLCH_TOLERANCE_VALUES = {
  lightness: 0.005,
  chroma: 0.005,
  hue: 0.5,
};
