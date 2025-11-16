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
import { XYZ } from "../interfaces/color-spaces.interface";
import { Matrix3x3 } from "../types/math-types";
/**
 * Preforms a chromatic adaptation algorithm on given XYZ values
 * @param {XYZ}                                 - color values
 * @param {{ X: number; Y: number; Z: number }} - source reference white
 * @param {{ X: number; Y: number; Z: number }} - destination reference white
 * @returns {XYZ} - adapted xyz values
 */
export declare const bradfordChromaticAdaptation: (xyz: XYZ, sRefWhite: {
  X: number;
  Y: number;
  Z: number;
}, dRefWhite: {
  X: number;
  Y: number;
  Z: number;
}) => XYZ;
/**
 * Preforms a chromatic adaptation algorithm on given XYZ values with a
 * given 3 x 3 matrix
 * @param {XYZ}                   - color values
 * @param {Matrix3x3}             - adaptation matrix
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const chromaticAdaptationPreCal: (xyz: XYZ, matrix: Matrix3x3) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const Ato9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const Bto9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const Cto9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D60 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D60toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D93 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D93toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const Eto9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F1 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F1toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F1 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F1toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F1 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F1toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F1 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F1toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F1 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F1toD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F1 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F1toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F1 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F1toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F1 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F1toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F1 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F1toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F1 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F1toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F1 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F1toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F1 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F1toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F1 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F1to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F3 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F3toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F3 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F3toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F3 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F3toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F3 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F3toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F3 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F3toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F3 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F3toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F3 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F3toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F3 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F3toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F3 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F3toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F3 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F3toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F3 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F3toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F3 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F3toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F3 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F3toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F3 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F3to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F4 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F4toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F4 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F4toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F4 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F4toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F4 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F4toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F4 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F4toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F4 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F4toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F4 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F4toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F4 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F4toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F4 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F4toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F4 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F4toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F4 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F4toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F4 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F4toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F4 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F4toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F4 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F4to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F5 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F5toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F5 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F5toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F5 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F5toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F5 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F5toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F5 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F5toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F5 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F5toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F5 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F5toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F5 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F5toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F5 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F5toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F5 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F5toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F5 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F5toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F5 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F5toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F5 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F5toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F5 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F5to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F6 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F6toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F6 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F6toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F6 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F6toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F6 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F6toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F6 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F6toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F6 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F6toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F6 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F6toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F6 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F6toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F6 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F6toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F6 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F6toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F6 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F6toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F6 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F6toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F6 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F6toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F6 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F6to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7ToD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F8 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F8toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F8 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F8toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F8 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F8toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F8 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F8toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F8 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F8toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F8 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F8toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F8 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F8toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F8 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F8toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F8 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F8toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F8 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F8toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F8 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F8toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F8 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F8toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F8 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F8toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F8 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F8to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F9 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F9toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F9 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F9toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F9 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F9toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F9 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F9toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F9 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F9toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F9 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F9toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F9 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F9toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F9 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F9toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F9 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F9toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F9 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F9toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F9 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F9toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F9 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F9toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F9 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F9toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F9 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F9to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F10 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F10toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F10 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F10toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F10 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F10toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F10 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F10toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F10 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F10toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F10 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F10toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F10 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F10toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F10 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F10toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F10 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F10toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F10 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F10toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F10 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F10toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F10 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F10toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F10 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F10toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F10 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F10to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11ToD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toF12Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F12 to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F12toF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F12 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F12toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F12 to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F12toF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F12 to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F12toF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F12 to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F12toF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F12 to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F12toF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F12 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F12toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F12 to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F12toF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F12 to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F12toF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F12 to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F12toF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F12 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F12toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F12 to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F12toD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F12 to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F12toD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F12 to reference white 9300K
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F12to9300KAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white D60
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoD60Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white D93
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoD93Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white F1
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoF1Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white F3
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoF3Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white F4
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoF4Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white F5
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoF5Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white F6
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoF6Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white F8
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoF8Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white F9
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoF9Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white F10
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoF10Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white 9300K to reference white F12
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const N9300KtoF12Adaptation: (xyz: XYZ) => XYZ;
