/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { labToXyz } from './lab-conversions';
import { luvToXyz } from './luv-conversions';
import { linearValToSRGBVal } from './rgb-conversions';
import { matrixByVectorObjMultiAsSpace } from '../helpers/matrix';
import { CB_CR_CONVERSION_MATRICES } from '../constants/cb-cr-conversions-matrices';
/**
 * Converts a color from LCH(ab) color space to LAB color space
 * @param {LCH}                   - Lch(ab) color value
 * @returns {LAB}                 - lab color value
 */
export const lch_abToLab = ({ lightness, chroma, hue }) => {
    const H = (hue / 180) * Math.PI;
    const a = chroma * Math.cos(H);
    const b = chroma * Math.sin(H);
    return { luminance: lightness, a, b };
};
/**
 * Converts a color from LCH(ab) color space to LUV color space
 * @param {LCH}                   - Lch(uv) color value
 * @returns {LUV}                 - luv color value
 */
export const lch_uvToLuv = ({ lightness, chroma, hue }) => {
    const H = (hue / 180) * Math.PI;
    const u = chroma * Math.cos(H);
    const v = chroma * Math.sin(H);
    return { L: lightness, u, v };
};
/**
 * Converts a color from LCH(ab) color space to XYZ
 * @param {LCH}                   - Lch(ab) color value
 * @returns {XYZ}                 - xyz value
 */
export const lch_abToXyz = (lch) => {
    return labToXyz(lch_abToLab(lch));
};
/**
 * Converts a color from LCH(uv) color space to XYZ
 * @param {LCH}                   - Lch(uv) color value
 * @returns {XYZ}                 - xyz value
 */
export const lch_uvToXyz = (lch) => {
    return luvToXyz(lch_uvToLuv(lch));
};
/**
 * Converts a color from OKLCH color space to OKLab
 *
 * @param {LCH} oklch              - OKLCH color object to convert
 * @returns {LAB}                  - OKLab color object with L, A, B components
 */
export const OKLCHToOKLab = (oklch) => {
    const { lightness, chroma, hue } = oklch;
    const hueRad = hue * (Math.PI / 180);
    return {
        luminance: lightness,
        a: chroma * Math.cos(hueRad),
        b: chroma * Math.sin(hueRad),
    };
};
/**
 * Converts a color from OKLCH color space to sRGB
 *
 * @param {LCH} oklch              - OKLCH color object to convert
 * @returns {RGB}                  - sRGB color object
 */
export const oKLCHToSRGB = (oklch) => {
    const OKLab = OKLCHToOKLab(oklch);
    const LMS_c = matrixByVectorObjMultiAsSpace(CB_CR_CONVERSION_MATRICES.OKLab_TO_LMS, { luminance: OKLab.luminance, a: OKLab.a, b: OKLab.b }, ['L', 'M', 'S']);
    const LMS = {
        L: LMS_c.L * LMS_c.L * LMS_c.L,
        M: LMS_c.M * LMS_c.M * LMS_c.M,
        S: LMS_c.S * LMS_c.S * LMS_c.S,
    };
    const linearRGB = matrixByVectorObjMultiAsSpace(CB_CR_CONVERSION_MATRICES.LMS_TO_Linear_RGB, LMS, ['red', 'green', 'blue']);
    const srgb = {
        red: Math.round(linearValToSRGBVal(linearRGB.red) * 255),
        green: Math.round(linearValToSRGBVal(linearRGB.green) * 255),
        blue: Math.round(linearValToSRGBVal(linearRGB.blue) * 255),
    };
    return srgb;
};
/**
 * Checks if an OKLCH color is within the sRGB gamut
 *
 * @param {LCH}                    - OKLCH color object with lightness, chroma, and hue
 * @returns {boolean}              - true if color is within sRGB gamut, false otherwise
 */
export const isOKLCHInGamut = ({ lightness, chroma, hue }) => {
    if (lightness < 0 || lightness > 1 || chroma < 0) {
        return false;
    }
    const testRGB = oKLCHToSRGB({ lightness, chroma, hue });
    return (testRGB.red >= 0 &&
        testRGB.red <= 255 &&
        testRGB.green >= 0 &&
        testRGB.green <= 255 &&
        testRGB.blue >= 0 &&
        testRGB.blue <= 255);
};
