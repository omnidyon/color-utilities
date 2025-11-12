import { matrixVectorMultiAsXyz } from '../helpers/matrix';
import { ADAPTIVE_MATRICES } from '../constants/adaptive_matrices';
import { fromXyzConverters, toXyzConverters } from '../color-converter/convertor-map';
/**
 * Preforms a chromatic adaptation on a color in a XYZ space
 *
 * @param {XYZ}			       - color to preform the chromatic adaptation on
 * @param {string}			   - string representation of the adaptation
 * @returns	{XYZ}			     - Chromatically adapted XYZ values
 */
export const adapt = (color, adaptation) => {
    return matrixVectorMultiAsXyz(ADAPTIVE_MATRICES[adaptation], color);
};
/**
 * A class used for chromatic adaptation of colors
 * @param { XYZ }	           - color to preform the chromatic adaptation on
 */
export class Adapter {
    constructor(color, colorSpace = 'xyz') {
        this.color = color
            ? this.getXyz(color, colorSpace)
            : { x: 95.05, y: 100.0, z: 108.9 };
    }
    getXyz(color, colorSpace) {
        if (colorSpace === 'xyz')
            return color;
        else
            return toXyzConverters[colorSpace](color);
    }
    /**
     * Method that returns a chromatically adopted color in a desired color space.
     * @param	{string}						- string representing the adaptation
     * @param	{string}						- string representing the  desired color space of the return values
     * @returns	{AdaptiveColors}  - adapted color
     */
    adapt(adaptation, returnSpace = 'xyz') {
        if (returnSpace === 'xyz') {
            return adapt(this.color, adaptation);
        }
        else {
            return fromXyzConverters[returnSpace](adapt(this.color, adaptation));
        }
    }
    set(color, colorSpace) {
        this.color = this.getXyz(color, colorSpace ?? 'xyz');
    }
}
