import { xyzToSrgb } from "./xyz-conversions";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { CIE_κ, CIE_ϵ } from "../constants/conditionals";
import { REFERENCE_ILLUMINANT } from "../constants/reference-illuminants";
import { LAB, LCH, RGB, XYZ } from "../interfaces/color-spaces.interface";
import { matrixByVectorObjMultiAsSpace } from "../helpers/matrix";
import { CB_CR_CONVERSION_MATRICES } from "../constants/cb-cr-conversions-matrices";
import { linearValToSRGBVal } from "./rgb-conversions";
/*************************************************************
 *                        CIE-L*ab
 *************************************************************/
/**
 * Converts a color from CIE-L*ab color space to XYZ
 * @param {LAB}                   - Lab color value
 * @returns {xyz}                 - xyz value
 */
export const labToXyz = ({ luminance, a, b }: LAB): XYZ => {
  const fY = (luminance + 16) / 116;
  const z = f(fY - b / 200) * REFERENCE_ILLUMINANT.D65.Z * 100 + 0;
  const x = f(a / 500 + fY) * REFERENCE_ILLUMINANT.D65.X * 100 + 0;
  const y = (luminance > CIE_κ * CIE_ϵ ? Math.pow((luminance + 16) / 116, 3) : luminance / CIE_κ) *
      REFERENCE_ILLUMINANT.D65.Y *
      100 +
    0;
  return { x, y, z };
};

const f = (num: number): number => {
  return Math.pow(num, 3) > CIE_ϵ ? Math.pow(num, 3) : (116 * num - 16) / CIE_κ;
};

/**
 * Converts a color from CIE-L*ab color space to LCH(ab) color space
 * @param {LAB}                   - Lab color value
 * @returns {LCH}                 - LCH(ab) color value
 */
export const labToLch_ab = ({ luminance, a, b }: LAB): LCH => {
  const hr = Math.atan2(b, a);
  const hue = hr < 0 ? (hr * 360) / 2 / Math.PI + 360 : (hr * 360) / 2 / Math.PI;
  const chroma = Math.sqrt(a * a + b * b);

  return { lightness: luminance, chroma, hue };
};

/**
 * Converts a color from OKLab color space to OKLCH
 *
 * @param {OKLab} oklab            - OKLab color object to convert
 * @returns {LCH}                  - OKLCH color object with lightness, chroma, and hue
 */
export const oklabToOKLCH = (oklab: LAB): LCH => {
  const C = Math.sqrt(oklab.a * oklab.a + oklab.b * oklab.b);
  let H = Math.atan2(oklab.b, oklab.a) * (180 / Math.PI);
  if (H < 0) H += 360;

  return { lightness: oklab.luminance, chroma: C, hue: H };
};

/**
 * Converts OKLAB color values to sRGB color values
 * @param {OKLAB} oklab - OKLAB color values
 * @returns {RGB} sRGB color values
 */
export const oKLabToSRGB = (oklab: LAB): RGB => {
  const LMS_c = matrixByVectorObjMultiAsSpace(
    CB_CR_CONVERSION_MATRICES.OKLab_TO_LMS,
    { luminance: oklab.luminance, a: oklab.a, b: oklab.b },
    ["L", "M", "S"],
  );

  const LMS = {
    L: LMS_c.L * LMS_c.L * LMS_c.L,
    M: LMS_c.M * LMS_c.M * LMS_c.M,
    S: LMS_c.S * LMS_c.S * LMS_c.S,
  };

  const linearRGB = matrixByVectorObjMultiAsSpace(
    CB_CR_CONVERSION_MATRICES.LMS_TO_Linear_RGB,
    LMS,
    ["red", "green", "blue"],
  );

  // Apply sRGB gamma correction
  const srgb = {
    red: Math.round(linearValToSRGBVal(linearRGB.red)),
    green: Math.round(linearValToSRGBVal(linearRGB.green)),
    blue: Math.round(linearValToSRGBVal(linearRGB.blue)),
  };

  // Convert to 0-255 range and check gamut
  const rgb = {
    red: Math.round(srgb.red * 255),
    green: Math.round(srgb.green * 255),
    blue: Math.round(srgb.blue * 255),
  };

  return rgb;
};

/**
 * Converts a color from CIE-L*ab color space to sRGB color space
 * @param {LAB}                   - Lab color value
 * @returns {RGB}                 - sRGB color value
 */
export const labToSrgb = (lab: LAB): RGB => {
  return xyzToSrgb(labToXyz(lab));
};

/*************************************************************
 *                        Hunter-Lab
 *************************************************************/
/**
 * Converts a color from Hunter's Lab color space to XYZ values
 * @param {LAB}                   - Lab color value
 * @returns {XYZ}                 - XYZ color value
 */
export const hunterLabToXyz = ({ luminance, a, b }: LAB): XYZ => {
  const y = Math.pow(luminance / 10, 2);
  const x = (((a / 17.5) * luminance) / 10 + y) / 1.02;
  const z = -(((b / 7) * luminance) / 10 - y) / 0.847;
  return { x, y, z };
};
