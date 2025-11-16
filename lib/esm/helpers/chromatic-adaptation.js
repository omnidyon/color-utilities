/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 *
 * A chromatic adaptation transform (CAT) is capable of
 * predicting corresponding colors. A pair of corresponding
 * colors consists of a color observed under one illuminant
 * (say, D65) and another color that has the same appearance
 * when observed under a different illuminant (say, A).
 *
 * To present the von Kries hypothesis in terms of a chromatic
 * adaptation model, we need a 3 by 3 matrix M , which
 * transforms the tristimulus values (TSVs) 𝑋β, 𝑌β, 𝑍β under
 * an illuminant called β into the cone-like or sharper sensor
 * spaces (𝑅, 𝐺, 𝐵 or 𝐿, 𝑀, 𝑆 spaces)
 */
import { ADAPTIVE_MATRICES } from "../constants/adaptive_matrices";
import { BRADFORD_COEFFICIENT_MATRICES } from "../constants/transform-matrixes";
import { matrix3x3Multi, matrixVectorMulti, matrixVectorMultiAsXyz } from "./matrix";
/**
 * Transform from XYZ into a cone response domain (ρ, γ, β),
 * using a Simplified Bradford Transform method
 * @param {number[]}                   - source reference white
 * @param {number[]}                   - destination reference white
 * @returns {Matrix3x3}                - a 3 x 3 Matrix used to preform
 *                                     linear transformation on a color
 */
const linearBradfordTransformation = (sourceWhite, destinationWhite) => {
  const Ma = BRADFORD_COEFFICIENT_MATRICES.MA;
  const Ma_1 = BRADFORD_COEFFICIENT_MATRICES.MA_1;
  const PYβs = matrixVectorMulti(Ma, sourceWhite);
  const PYβd = matrixVectorMulti(Ma, destinationWhite);
  const diff = [
    [PYβs[0] / PYβd[0], 0, 0],
    [0, PYβs[1] / PYβd[1], 0],
    [0, 0, PYβs[2] / PYβd[2]],
  ];
  return matrix3x3Multi(matrix3x3Multi(Ma_1, diff), Ma);
};
/**
 * Preforms a chromatic adaptation algorithm on given XYZ values
 * @param {XYZ}                                 - color values
 * @param {{ X: number; Y: number; Z: number }} - source reference white
 * @param {{ X: number; Y: number; Z: number }} - destination reference white
 * @returns {XYZ} - adapted xyz values
 */
export const bradfordChromaticAdaptation = (xyz, sRefWhite, dRefWhite) => {
  //linear transformation
  const M = linearBradfordTransformation([sRefWhite.X, sRefWhite.Y, sRefWhite.Z], [
    dRefWhite.X,
    dRefWhite.Y,
    dRefWhite.Z,
  ]);
  return matrixVectorMultiAsXyz(M, xyz);
};
/**
 * Preforms a chromatic adaptation algorithm on given XYZ values with a
 * given 3 x 3 matrix
 * @param {XYZ}                   - color values
 * @param {Matrix3x3}             - adaptation matrix
 * @returns {XYZ}                 - adapted xyz values
 */
export const chromaticAdaptationPreCal = (xyz, matrix) => {
  return matrixVectorMultiAsXyz(matrix, xyz);
};
/**
 * Chromatic adaptation from reference white A to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const Ato9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_9300K);
};
/**
 * Chromatic adaptation from reference white A to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoBAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_B);
};
/**
 * Chromatic adaptation from reference white A to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoCAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_C);
};
/**
 * Chromatic adaptation from reference white A to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoD50Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_D50);
};
/**
 * Chromatic adaptation from reference white A to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoD55Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_D55);
};
/**
 * Chromatic adaptation from reference white A to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_D60);
};
/**
 * Chromatic adaptation from reference white A to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoD65Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_D65);
};
/**
 * Chromatic adaptation from reference white A to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoD75Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_D75);
};
/**
 * Chromatic adaptation from reference white A to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_D93);
};
/**
 * Chromatic adaptation from reference white A to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoEAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_E);
};
/**
 * Chromatic adaptation from reference white A to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F1);
};
/**
 * Chromatic adaptation from reference white A to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F3);
};
/**
 * Chromatic adaptation from reference white A to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F4);
};
/**
 * Chromatic adaptation from reference white A to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F5);
};
/**
 * Chromatic adaptation from reference white A to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F6);
};
/**
 * Chromatic adaptation from reference white A to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F7);
};
/**
 * Chromatic adaptation from reference white A to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F8);
};
/**
 * Chromatic adaptation from reference white A to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F9);
};
/**
 * Chromatic adaptation from reference white A to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F10);
};
/**
 * Chromatic adaptation from reference white A to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F11);
};
/**
 * Chromatic adaptation from reference white A to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F12);
};
/**
 * Chromatic adaptation from reference white A to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F2);
};
/**
 * Chromatic adaptation from reference white B to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoAAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_A);
};
/**
 * Chromatic adaptation from reference white B to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoCAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_C);
};
/**
 * Chromatic adaptation from reference white B to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoD50Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_D50);
};
/**
 * Chromatic adaptation from reference white B to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoD55Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_D55);
};
/**
 * Chromatic adaptation from reference white B to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoD65Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_D65);
};
/**
 * Chromatic adaptation from reference white B to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoD75Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_D75);
};
/**
 * Chromatic adaptation from reference white B to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoEAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_E);
};
/**
 * Chromatic adaptation from reference white B to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F2);
};
/**
 * Chromatic adaptation from reference white B to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F7);
};
/**
 * Chromatic adaptation from reference white B to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F11);
};
/**
 * Chromatic adaptation from reference white B to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F1);
};
/**
 * Chromatic adaptation from reference white B to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F3);
};
/**
 * Chromatic adaptation from reference white B to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F4);
};
/**
 * Chromatic adaptation from reference white B to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F5);
};
/**
 * Chromatic adaptation from reference white B to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F6);
};
/**
 * Chromatic adaptation from reference white B to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F8);
};
/**
 * Chromatic adaptation from reference white B to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F9);
};
/**
 * Chromatic adaptation from reference white B to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F10);
};
/**
 * Chromatic adaptation from reference white B to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F12);
};
/**
 * Chromatic adaptation from reference white B to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_D60);
};
/**
 * Chromatic adaptation from reference white B to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_D93);
};
/**
 * Chromatic adaptation from reference white B to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const Bto9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_9300K);
};
/**
 * Chromatic adaptation from reference white C to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoAAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_A);
};
/**
 * Chromatic adaptation from reference white C to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoBAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_B);
};
/**
 * Chromatic adaptation from reference white C to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoD50Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_D50);
};
/**
 * Chromatic adaptation from reference white C to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoD55Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_D55);
};
/**
 * Chromatic adaptation from reference white C to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoD65Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_D65);
};
/**
 * Chromatic adaptation from reference white C to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoD75Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_D75);
};
/**
 * Chromatic adaptation from reference white C to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoEAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_E);
};
/**
 * Chromatic adaptation from reference white C to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F2);
};
/**
 * Chromatic adaptation from reference white C to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F7);
};
/**
 * Chromatic adaptation from reference white C to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F11);
};
/**
 * Chromatic adaptation from reference white C to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F1);
};
/**
 * Chromatic adaptation from reference white C to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F3);
};
/**
 * Chromatic adaptation from reference white C to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F4);
};
/**
 * Chromatic adaptation from reference white C to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F5);
};
/**
 * Chromatic adaptation from reference white C to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F6);
};
/**
 * Chromatic adaptation from reference white C to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F8);
};
/**
 * Chromatic adaptation from reference white C to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F9);
};
/**
 * Chromatic adaptation from reference white C to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F10);
};
/**
 * Chromatic adaptation from reference white C to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F12);
};
/**
 * Chromatic adaptation from reference white C to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_D60);
};
/**
 * Chromatic adaptation from reference white C to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_D93);
};
/**
 * Chromatic adaptation from reference white C to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const Cto9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_9300K);
};
/**
 * Chromatic adaptation from reference white D50 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toAAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_A);
};
/**
 * Chromatic adaptation from reference white D50 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toBAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_B);
};
/**
 * Chromatic adaptation from reference white D50 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toCAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_C);
};
/**
 * Chromatic adaptation from reference white D50 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toD55Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_D55);
};
/**
 * Chromatic adaptation from reference white D50 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toD65Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_D65);
};
/**
 * Chromatic adaptation from reference white D50 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toD75Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_D75);
};
/**
 * Chromatic adaptation from reference white D50 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toEAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_E);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F2);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F7);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F11);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F1);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F3);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F4);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F5);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F6);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F8);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F9);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F10);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F12);
};
/**
 * Chromatic adaptation from reference white D50 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_D60);
};
/**
 * Chromatic adaptation from reference white D50 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_D93);
};
/**
 * Chromatic adaptation from reference white D50 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_9300K);
};
/**
 * Chromatic adaptation from reference white D55 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toAAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_A);
};
/**
 * Chromatic adaptation from reference white D55 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toBAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_B);
};
/**
 * Chromatic adaptation from reference white D55 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toCAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_C);
};
/**
 * Chromatic adaptation from reference white D55 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toD50Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_D50);
};
/**
 * Chromatic adaptation from reference white D55 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toD65Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_D65);
};
/**
 * Chromatic adaptation from reference white D55 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toD75Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_D75);
};
/**
 * Chromatic adaptation from reference white D55 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toEAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_E);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F2);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F7);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F11);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F1);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F3);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F4);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F5);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F6);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F8);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F9);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F10);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F12);
};
/**
 * Chromatic adaptation from reference white D55 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_D60);
};
/**
 * Chromatic adaptation from reference white D55 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_D93);
};
/**
 * Chromatic adaptation from reference white D55 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_9300K);
};
/**
 * Chromatic adaptation from reference white D60 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toAAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_A);
};
/**
 * Chromatic adaptation from reference white D60 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toBAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_B);
};
/**
 * Chromatic adaptation from reference white D60 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toCAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_C);
};
/**
 * Chromatic adaptation from reference white D60 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toD50Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_D50);
};
/**
 * Chromatic adaptation from reference white D60 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toD55Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_D55);
};
/**
 * Chromatic adaptation from reference white D60 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toD65Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_D65);
};
/**
 * Chromatic adaptation from reference white D60 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toD75Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_D75);
};
/**
 * Chromatic adaptation from reference white D60 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_D93);
};
/**
 * Chromatic adaptation from reference white D60 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toEAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_E);
};
/**
 * Chromatic adaptation from reference white D60 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_9300K);
};
/**
 * Chromatic adaptation from reference white D60 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_F1);
};
/**
 * Chromatic adaptation from reference white D60 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_F2);
};
/**
 * Chromatic adaptation from reference white D60 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_F3);
};
/**
 * Chromatic adaptation from reference white D60 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_F4);
};
/**
 * Chromatic adaptation from reference white D60 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_F5);
};
/**
 * Chromatic adaptation from reference white D60 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_F6);
};
/**
 * Chromatic adaptation from reference white D60 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_F7);
};
/**
 * Chromatic adaptation from reference white D60 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_F8);
};
/**
 * Chromatic adaptation from reference white D60 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_F9);
};
/**
 * Chromatic adaptation from reference white D60 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_F10);
};
/**
 * Chromatic adaptation from reference white D60 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_F11);
};
/**
 * Chromatic adaptation from reference white D60 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D60toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D60_F12);
};
/**
 * Chromatic adaptation from reference white D65 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toAAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_A);
};
/**
 * Chromatic adaptation from reference white D65 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toBAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_B);
};
/**
 * Chromatic adaptation from reference white D65 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toCAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_C);
};
/**
 * Chromatic adaptation from reference white D65 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toD50Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_D50);
};
/**
 * Chromatic adaptation from reference white D65 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toD55Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_D55);
};
/**
 * Chromatic adaptation from reference white D65 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toD75Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_D75);
};
/**
 * Chromatic adaptation from reference white D65 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toEAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_E);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F2);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F7);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F11);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F1);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F3);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F4);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F5);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F6);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F8);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F9);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F10);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F12);
};
/**
 * Chromatic adaptation from reference white D65 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_D60);
};
/**
 * Chromatic adaptation from reference white D65 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_D93);
};
/**
 * Chromatic adaptation from reference white D65 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_9300K);
};
/**
 * Chromatic adaptation from reference white D75 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toAAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_A);
};
/**
 * Chromatic adaptation from reference white D75 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toBAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_B);
};
/**
 * Chromatic adaptation from reference white D75 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toCAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_C);
};
/**
 * Chromatic adaptation from reference white D75 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toD50Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_D50);
};
/**
 * Chromatic adaptation from reference white D75 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toD55Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_D55);
};
/**
 * Chromatic adaptation from reference white D75 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toD65Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_D65);
};
/**
 * Chromatic adaptation from reference white D75 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toEAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_E);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F2);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F7);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F11);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F1);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F3);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F4);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F5);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F6);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F8);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F9);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F10);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F12);
};
/**
 * Chromatic adaptation from reference white D75 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_D60);
};
/**
 * Chromatic adaptation from reference white D75 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_D93);
};
/**
 * Chromatic adaptation from reference white D75 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_9300K);
};
/**
 * Chromatic adaptation from reference white D93 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toAAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_A);
};
/**
 * Chromatic adaptation from reference white D93 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toBAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_B);
};
/**
 * Chromatic adaptation from reference white D93 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toCAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_C);
};
/**
 * Chromatic adaptation from reference white D93 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toD50Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_D50);
};
/**
 * Chromatic adaptation from reference white D93 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toD55Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_D55);
};
/**
 * Chromatic adaptation from reference white D93 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_D60);
};
/**
 * Chromatic adaptation from reference white D93 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toD65Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_D65);
};
/**
 * Chromatic adaptation from reference white D93 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toD75Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_D75);
};
/**
 * Chromatic adaptation from reference white D93 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toEAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_E);
};
/**
 * Chromatic adaptation from reference white D93 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_9300K);
};
/**
 * Chromatic adaptation from reference white D93 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_F1);
};
/**
 * Chromatic adaptation from reference white D93 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_F2);
};
/**
 * Chromatic adaptation from reference white D93 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_F3);
};
/**
 * Chromatic adaptation from reference white D93 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_F4);
};
/**
 * Chromatic adaptation from reference white D93 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_F5);
};
/**
 * Chromatic adaptation from reference white D93 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_F6);
};
/**
 * Chromatic adaptation from reference white D93 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_F7);
};
/**
 * Chromatic adaptation from reference white D93 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_F8);
};
/**
 * Chromatic adaptation from reference white D93 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_F9);
};
/**
 * Chromatic adaptation from reference white D93 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_F10);
};
/**
 * Chromatic adaptation from reference white D93 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_F11);
};
/**
 * Chromatic adaptation from reference white D93 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D93toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D93_F12);
};
/**
 * Chromatic adaptation from reference white E to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoAAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_A);
};
/**
 * Chromatic adaptation from reference white E to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoBAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_B);
};
/**
 * Chromatic adaptation from reference white E to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoCAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_C);
};
/**
 * Chromatic adaptation from reference white E to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoD50Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_D50);
};
/**
 * Chromatic adaptation from reference white E to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoD55Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_D55);
};
/**
 * Chromatic adaptation from reference white E to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoD65Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_D65);
};
/**
 * Chromatic adaptation from reference white E to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoD75Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_D75);
};
/**
 * Chromatic adaptation from reference white E to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F2);
};
/**
 * Chromatic adaptation from reference white E to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F7);
};
/**
 * Chromatic adaptation from reference white E to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F11);
};
/**
 * Chromatic adaptation from reference white E to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F1);
};
/**
 * Chromatic adaptation from reference white E to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F3);
};
/**
 * Chromatic adaptation from reference white E to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F4);
};
/**
 * Chromatic adaptation from reference white E to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F5);
};
/**
 * Chromatic adaptation from reference white E to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F6);
};
/**
 * Chromatic adaptation from reference white E to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F8);
};
/**
 * Chromatic adaptation from reference white E to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F9);
};
/**
 * Chromatic adaptation from reference white E to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F10);
};
/**
 * Chromatic adaptation from reference white E to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F12);
};
/**
 * Chromatic adaptation from reference white E to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_D60);
};
/**
 * Chromatic adaptation from reference white E to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_D93);
};
/**
 * Chromatic adaptation from reference white E to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const Eto9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_9300K);
};
/**
 * Chromatic adaptation from reference white F1 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F1toBAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F1_B);
};
/**
 * Chromatic adaptation from reference white F1 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F1toCAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F1_C);
};
/**
 * Chromatic adaptation from reference white F1 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F1toD50Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F1_D50);
};
/**
 * Chromatic adaptation from reference white F1 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F1toD55Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F1_D55);
};
/**
 * Chromatic adaptation from reference white F1 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F1toD65Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F1_D65);
};
/**
 * Chromatic adaptation from reference white F1 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F1toD75Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F1_D75);
};
/**
 * Chromatic adaptation from reference white F1 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F1toEAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F1_E);
};
/**
 * Chromatic adaptation from reference white F1 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F1toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F1_F3);
};
/**
 * Chromatic adaptation from reference white F1 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F1toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F1_F4);
};
/**
 * Chromatic adaptation from reference white F1 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F1toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F1_F7);
};
/**
 * Chromatic adaptation from reference white F1 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F1toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F1_D60);
};
/**
 * Chromatic adaptation from reference white F1 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F1toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F1_D93);
};
/**
 * Chromatic adaptation from reference white F1 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F1to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F1_9300K);
};
/**
 * Chromatic adaptation from reference white F2 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toAAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_A);
};
/**
 * Chromatic adaptation from reference white F2 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toBAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_B);
};
/**
 * Chromatic adaptation from reference white F2 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toCAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_C);
};
/**
 * Chromatic adaptation from reference white F2 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toD50Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_D50);
};
/**
 * Chromatic adaptation from reference white F2 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toD55Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_D55);
};
/**
 * Chromatic adaptation from reference white F2 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toD65Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_D65);
};
/**
 * Chromatic adaptation from reference white F2 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toD75Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_D75);
};
/**
 * Chromatic adaptation from reference white F2 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toEAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_E);
};
/**
 * Chromatic adaptation from reference white F2 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_F7);
};
/**
 * Chromatic adaptation from reference white F2 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_F11);
};
/**
 * Chromatic adaptation from reference white F2 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_F1);
};
/**
 * Chromatic adaptation from reference white F2 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_F4);
};
/**
 * Chromatic adaptation from reference white F2 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_F5);
};
/**
 * Chromatic adaptation from reference white F2 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_F6);
};
/**
 * Chromatic adaptation from reference white F2 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_F8);
};
/**
 * Chromatic adaptation from reference white F2 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_F9);
};
/**
 * Chromatic adaptation from reference white F2 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_F10);
};
/**
 * Chromatic adaptation from reference white F2 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_F12);
};
/**
 * Chromatic adaptation from reference white F2 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_D60);
};
/**
 * Chromatic adaptation from reference white F2 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_D93);
};
/**
 * Chromatic adaptation from reference white F2 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_9300K);
};
/**
 * Chromatic adaptation from reference white F3 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F3toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F3_F1);
};
/**
 * Chromatic adaptation from reference white F3 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F3toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F3_F2);
};
/**
 * Chromatic adaptation from reference white F3 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F3toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F3_F4);
};
/**
 * Chromatic adaptation from reference white F3 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F3toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F3_F5);
};
/**
 * Chromatic adaptation from reference white F3 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F3toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F3_F6);
};
/**
 * Chromatic adaptation from reference white F3 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F3toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F3_F7);
};
/**
 * Chromatic adaptation from reference white F3 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F3toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F3_F8);
};
/**
 * Chromatic adaptation from reference white F3 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F3toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F3_F9);
};
/**
 * Chromatic adaptation from reference white F3 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F3toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F3_F10);
};
/**
 * Chromatic adaptation from reference white F3 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F3toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F3_F11);
};
/**
 * Chromatic adaptation from reference white F3 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F3toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F3_F12);
};
/**
 * Chromatic adaptation from reference white F3 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F3toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F3_D60);
};
/**
 * Chromatic adaptation from reference white F3 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F3toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F3_D93);
};
/**
 * Chromatic adaptation from reference white F3 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F3to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F3_9300K);
};
/**
 * Chromatic adaptation from reference white F4 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F4toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F4_F1);
};
/**
 * Chromatic adaptation from reference white F4 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F4toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F4_F2);
};
/**
 * Chromatic adaptation from reference white F4 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F4toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F4_F3);
};
/**
 * Chromatic adaptation from reference white F4 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F4toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F4_F5);
};
/**
 * Chromatic adaptation from reference white F4 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F4toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F4_F6);
};
/**
 * Chromatic adaptation from reference white F4 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F4toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F4_F7);
};
/**
 * Chromatic adaptation from reference white F4 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F4toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F4_F8);
};
/**
 * Chromatic adaptation from reference white F4 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F4toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F4_F9);
};
/**
 * Chromatic adaptation from reference white F4 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F4toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F4_F10);
};
/**
 * Chromatic adaptation from reference white F4 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F4toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F4_F11);
};
/**
 * Chromatic adaptation from reference white F4 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F4toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F4_F12);
};
/**
 * Chromatic adaptation from reference white F4 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F4toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F4_D60);
};
/**
 * Chromatic adaptation from reference white F4 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F4toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F4_D93);
};
/**
 * Chromatic adaptation from reference white F4 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F4to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F4_9300K);
};
/**
 * Chromatic adaptation from reference white F5 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F5toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F5_F1);
};
/**
 * Chromatic adaptation from reference white F5 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F5toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F5_F2);
};
/**
 * Chromatic adaptation from reference white F5 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F5toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F5_F3);
};
/**
 * Chromatic adaptation from reference white F5 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F5toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F5_F4);
};
/**
 * Chromatic adaptation from reference white F5 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F5toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F5_F6);
};
/**
 * Chromatic adaptation from reference white F5 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F5toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F5_F7);
};
/**
 * Chromatic adaptation from reference white F5 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F5toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F5_F8);
};
/**
 * Chromatic adaptation from reference white F5 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F5toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F5_F9);
};
/**
 * Chromatic adaptation from reference white F5 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F5toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F5_F10);
};
/**
 * Chromatic adaptation from reference white F5 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F5toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F5_F11);
};
/**
 * Chromatic adaptation from reference white F5 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F5toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F5_F12);
};
/**
 * Chromatic adaptation from reference white F5 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F5toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F5_D60);
};
/**
 * Chromatic adaptation from reference white F5 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F5toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F5_D93);
};
/**
 * Chromatic adaptation from reference white F5 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F5to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F5_9300K);
};
/**
 * Chromatic adaptation from reference white F6 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F6toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F6_F1);
};
/**
 * Chromatic adaptation from reference white F6 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F6toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F6_F2);
};
/**
 * Chromatic adaptation from reference white F6 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F6toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F6_F3);
};
/**
 * Chromatic adaptation from reference white F6 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F6toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F6_F4);
};
/**
 * Chromatic adaptation from reference white F6 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F6toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F6_F5);
};
/**
 * Chromatic adaptation from reference white F6 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F6toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F6_F7);
};
/**
 * Chromatic adaptation from reference white F6 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F6toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F6_F8);
};
/**
 * Chromatic adaptation from reference white F6 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F6toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F6_F9);
};
/**
 * Chromatic adaptation from reference white F6 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F6toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F6_F10);
};
/**
 * Chromatic adaptation from reference white F6 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F6toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F6_F11);
};
/**
 * Chromatic adaptation from reference white F6 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F6toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F6_F12);
};
/**
 * Chromatic adaptation from reference white F6 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F6toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F6_D60);
};
/**
 * Chromatic adaptation from reference white F6 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F6toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F6_D93);
};
/**
 * Chromatic adaptation from reference white F6 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F6to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F6_9300K);
};
/**
 * Chromatic adaptation from reference white F7 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toAAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_A);
};
/**
 * Chromatic adaptation from reference white F7 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toBAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_B);
};
/**
 * Chromatic adaptation from reference white F7 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toCAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_C);
};
/**
 * Chromatic adaptation from reference white F7 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toD50Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_D50);
};
/**
 * Chromatic adaptation from reference white F7 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toD55Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_D55);
};
/**
 * Chromatic adaptation from reference white F7 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7ToD65Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_D65);
};
/**
 * Chromatic adaptation from reference white F7 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toD75Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_D75);
};
/**
 * Chromatic adaptation from reference white F7 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toEAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_E);
};
/**
 * Chromatic adaptation from reference white F7 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_F2);
};
/**
 * Chromatic adaptation from reference white F7 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_F11);
};
/**
 * Chromatic adaptation from reference white F7 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_F1);
};
/**
 * Chromatic adaptation from reference white F7 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_F3);
};
/**
 * Chromatic adaptation from reference white F7 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_F4);
};
/**
 * Chromatic adaptation from reference white F7 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_F5);
};
/**
 * Chromatic adaptation from reference white F7 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_F6);
};
/**
 * Chromatic adaptation from reference white F7 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_F12);
};
/**
 * Chromatic adaptation from reference white F7 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_D60);
};
/**
 * Chromatic adaptation from reference white F7 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_D93);
};
/**
 * Chromatic adaptation from reference white F7 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_9300K);
};
/**
 * Chromatic adaptation from reference white F8 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F8toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F8_F1);
};
/**
 * Chromatic adaptation from reference white F8 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F8toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F8_F2);
};
/**
 * Chromatic adaptation from reference white F8 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F8toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F8_F3);
};
/**
 * Chromatic adaptation from reference white F8 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F8toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F8_F4);
};
/**
 * Chromatic adaptation from reference white F8 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F8toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F8_F5);
};
/**
 * Chromatic adaptation from reference white F8 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F8toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F8_F6);
};
/**
 * Chromatic adaptation from reference white F8 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F8toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F8_F7);
};
/**
 * Chromatic adaptation from reference white F8 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F8toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F8_F9);
};
/**
 * Chromatic adaptation from reference white F8 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F8toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F8_F10);
};
/**
 * Chromatic adaptation from reference white F8 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F8toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F8_F11);
};
/**
 * Chromatic adaptation from reference white F8 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F8toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F8_F12);
};
/**
 * Chromatic adaptation from reference white F8 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F8toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F8_D60);
};
/**
 * Chromatic adaptation from reference white F8 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F8toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F8_D93);
};
/**
 * Chromatic adaptation from reference white F8 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F8to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F8_9300K);
};
/**
 * Chromatic adaptation from reference white F9 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F9toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F9_F1);
};
/**
 * Chromatic adaptation from reference white F9 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F9toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F9_F2);
};
/**
 * Chromatic adaptation from reference white F9 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F9toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F9_F3);
};
/**
 * Chromatic adaptation from reference white F9 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F9toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F9_F4);
};
/**
 * Chromatic adaptation from reference white F9 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F9toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F9_F5);
};
/**
 * Chromatic adaptation from reference white F9 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F9toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F9_F6);
};
/**
 * Chromatic adaptation from reference white F9 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F9toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F9_F7);
};
/**
 * Chromatic adaptation from reference white F9 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F9toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F9_F8);
};
/**
 * Chromatic adaptation from reference white F9 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F9toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F9_F10);
};
/**
 * Chromatic adaptation from reference white F9 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F9toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F9_F11);
};
/**
 * Chromatic adaptation from reference white F9 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F9toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F9_F12);
};
/**
 * Chromatic adaptation from reference white F9 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F9toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F9_D60);
};
/**
 * Chromatic adaptation from reference white F9 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F9toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F9_D93);
};
/**
 * Chromatic adaptation from reference white F9 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F9to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F9_9300K);
};
/**
 * Chromatic adaptation from reference white F10 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F10toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F10_F1);
};
/**
 * Chromatic adaptation from reference white F10 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F10toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F10_F2);
};
/**
 * Chromatic adaptation from reference white F10 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F10toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F10_F3);
};
/**
 * Chromatic adaptation from reference white F10 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F10toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F10_F4);
};
/**
 * Chromatic adaptation from reference white F10 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F10toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F10_F5);
};
/**
 * Chromatic adaptation from reference white F10 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F10toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F10_F6);
};
/**
 * Chromatic adaptation from reference white F10 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F10toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F10_F7);
};
/**
 * Chromatic adaptation from reference white F10 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F10toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F10_F8);
};
/**
 * Chromatic adaptation from reference white F10 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F10toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F10_F9);
};
/**
 * Chromatic adaptation from reference white F10 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F10toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F10_F11);
};
/**
 * Chromatic adaptation from reference white F10 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F10toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F10_F12);
};
/**
 * Chromatic adaptation from reference white F10 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F10toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F10_D60);
};
/**
 * Chromatic adaptation from reference white F10 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F10toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F10_D93);
};
/**
 * Chromatic adaptation from reference white F10 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F10to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F10_9300K);
};
/**
 * Chromatic adaptation from reference white F11 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toAAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_A);
};
/**
 * Chromatic adaptation from reference white F11 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toBAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_B);
};
/**
 * Chromatic adaptation from reference white F11 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toCAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_C);
};
/**
 * Chromatic adaptation from reference white F11 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toD50Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_D50);
};
/**
 * Chromatic adaptation from reference white F11 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toD55Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_D55);
};
/**
 * Chromatic adaptation from reference white F11 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11ToD65Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_D65);
};
/**
 * Chromatic adaptation from reference white F11 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toD75Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_D75);
};
/**
 * Chromatic adaptation from reference white F11 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toEAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_E);
};
/**
 * Chromatic adaptation from reference white F11 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_F2);
};
/**
 * Chromatic adaptation from reference white F11 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_F7);
};
/**
 * Chromatic adaptation from reference white F11 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_F1);
};
/**
 * Chromatic adaptation from reference white F11 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_F3);
};
/**
 * Chromatic adaptation from reference white F11 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_F4);
};
/**
 * Chromatic adaptation from reference white F11 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_F5);
};
/**
 * Chromatic adaptation from reference white F11 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_F6);
};
/**
 * Chromatic adaptation from reference white F11 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_F8);
};
/**
 * Chromatic adaptation from reference white F11 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_F9);
};
/**
 * Chromatic adaptation from reference white F11 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_F10);
};
/**
 * Chromatic adaptation from reference white F11 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_F12);
};
/**
 * Chromatic adaptation from reference white F11 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_D60);
};
/**
 * Chromatic adaptation from reference white F11 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_D93);
};
/**
 * Chromatic adaptation from reference white F11 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_9300K);
};
/**
 * Chromatic adaptation from reference white F12 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F12toF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F12_F1);
};
/**
 * Chromatic adaptation from reference white F12 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F12toF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F12_F2);
};
/**
 * Chromatic adaptation from reference white F12 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F12toF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F12_F3);
};
/**
 * Chromatic adaptation from reference white F12 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F12toF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F12_F4);
};
/**
 * Chromatic adaptation from reference white F12 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F12toF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F12_F5);
};
/**
 * Chromatic adaptation from reference white F12 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F12toF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F12_F6);
};
/**
 * Chromatic adaptation from reference white F12 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F12toF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F12_F7);
};
/**
 * Chromatic adaptation from reference white F12 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F12toF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F12_F8);
};
/**
 * Chromatic adaptation from reference white F12 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F12toF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F12_F9);
};
/**
 * Chromatic adaptation from reference white F12 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F12toF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F12_F10);
};
/**
 * Chromatic adaptation from reference white F12 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F12toF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F12_F11);
};
/**
 * Chromatic adaptation from reference white F12 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F12toD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F12_D60);
};
/**
 * Chromatic adaptation from reference white F12 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F12toD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F12_D93);
};
/**
 * Chromatic adaptation from reference white F12 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F12to9300KAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F12_9300K);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoAAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_A"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoBAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_B"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoCAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_C"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoD50Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_D50"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoD55Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_D55"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoD60Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_D60"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoD65Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_D65"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoD75Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_D75"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoD93Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_D93"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoEAdaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_E"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoF1Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_F1"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoF2Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_F2"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoF3Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_F3"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoF4Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_F4"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoF5Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_F5"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoF6Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_F6"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoF7Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_F7"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoF8Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_F8"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoF9Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_F9"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoF10Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_F10"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoF11Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_F11"]);
};
/**
 * Chromatic adaptation from reference white 9300K to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const N9300KtoF12Adaptation = (xyz) => {
  return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES["9300K_F12"]);
};
