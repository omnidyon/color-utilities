/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import {
  CMY,
  CMY_M,
  CMYK,
  CMYK_M,
  HCY,
  HCY_M,
  HSI,
  HSL,
  HSL_M,
  HSLA,
  HSV,
  HSV_M,
  HSVA,
  HWB,
  HWB_M,
  LAB,
  LAB_M,
  LCH,
  LCH_M,
  LMS,
  LUV,
  RGB,
  RGB_M,
  RGBA,
  RYB,
  RYB_M,
  TSL,
  UVW,
  xvYCC,
  XYY,
  XYZ,
  YCbCr,
  YcCbcCrc,
  YCoCg,
  YDbDr,
  YIQ,
  YPbPr,
} from "../interfaces/color-spaces.interface";
import { ColorSpaceUnion } from "../types/colors";

const sanitizerMap: { [key: string]: (color: ColorSpaceUnion) => ColorSpaceUnion } = {
  "rgb": (color) => sanitizeRGB(color as RGB),
  "rgba": (color) => sanitizeRGB(color as RGBA),
  "rgb_m": (color) => sanitizeRGB_M(color as RGB_M),
  "rgba_m": (color) => sanitizeRGB_M(color as RGB_M),
  "hsl": (color) => sanitizeHSL(color as HSL),
  "hsla": (color) => sanitizeHSL(color as HSLA),
  "hsl_m": (color) => sanitizeHSL_M(color as HSL_M),
  "hsv": (color) => sanitizeHSV(color as HSV),
  "hsva": (color) => sanitizeHSV(color as HSVA),
  "hsv_m": (color) => sanitizeHSV_M(color as HSV_M),
  "hwb": (color) => sanitizeHWB(color as HWB),
  "hwb_m": (color) => sanitizeHWB_M(color as HWB_M),
  "cmy": (color) => sanitizeCMY(color as CMY),
  "cmy_m": (color) => sanitizeCMY_M(color as CMY_M),
  "cmyk": (color) => sanitizeCMYK(color as CMYK),
  "cmyk_m": (color) => sanitizeCMYK_M(color as CMYK_M),
  "lab": (color) => sanitizeLAB(color as LAB),
  "lab_m": (color) => sanitizeLAB_M(color as LAB_M),
  "lch": (color) => sanitizeLCH(color as LCH),
  "lch_m": (color) => sanitizeLCH_M(color as LCH_M),
  "hcy": (color) => sanitizeHCY(color as HCY),
  "hcy_m": (color) => sanitizeHCY_M(color as HCY_M),
  "ryb": (color) => sanitizeRYB(color as RYB),
  "ryb_m": (color) => sanitizeRYB_M(color as RYB_M),
  "hsi": (color) => sanitizeHSI(color as HSI),
  "lms": (color) => sanitizeLMS(color as LMS),
  "luv": (color) => sanitizeLUV(color as LUV),
  "tsl": (color) => sanitizeTSL(color as TSL),
  "uvw": (color) => sanitizeUVW(color as UVW),
  "xvycc": (color) => sanitizeXvYCC(color as xvYCC),
  "xyz": (color) => sanitizeXYZ(color as XYZ),
  "xyy": (color) => sanitizeXYY(color as XYY),
  "ycbcr": (color) => sanitizeYCbCr(color as YCbCr),
  "yccbccrc": (color) => sanitizeYcCbcCrc(color as YcCbcCrc),
  "ycocg": (color) => sanitizeYCoCg(color as YCoCg),
  "ydbdr": (color) => sanitizeYDbDr(color as YDbDr),
  "yiq": (color) => sanitizeYIQ(color as YIQ),
  "ypbpr": (color) => sanitizeYPbPr(color as YPbPr),
};

/**
 * Sanitizes a color by clamping values to valid ranges
 * @param space - The color space
 * @param color - The color object to sanitize
 * @returns Sanitized color or null if invalid
 */
export const sanitizeColor = (
  space: string,
  color: ColorSpaceUnion,
): ColorSpaceUnion | null => {
  if (!color || typeof color !== "object") return null;

  if (space === "hex" && typeof color === "string") {
    const hex = (color as string).replace(/[^0-9A-F]/gi, "").toUpperCase();
    return hex.length === 3 ? hex.split("").map((ch) => ch + ch).join("") : hex.length === 6 ? hex : null;
  }

  const sanitizer = sanitizerMap[space];
  if (sanitizer) {
    return sanitizer(color);
  }

  return color;
};

/**
 * Clamps a value between a minimum and maximum range
 * @param value - The value to clamp
 * @param min - The minimum allowed value
 * @param max - The maximum allowed value
 * @returns The clamped value
 */
const clamp = (value: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, value));
};

/**
 * Sanitizes RGB color values by clamping to valid ranges
 * @param color - The RGB or RGBA color object to sanitize
 * @returns Sanitized RGB or RGBA color
 */
const sanitizeRGB = (color: RGB | RGBA): RGB | RGBA => {
  const sanitized = { ...color };
  sanitized.red = clamp(sanitized.red, 0, 255);
  sanitized.green = clamp(sanitized.green, 0, 255);
  sanitized.blue = clamp(sanitized.blue, 0, 255);
  if ("alpha" in sanitized) {
    sanitized.alpha = clamp(sanitized.alpha, 0, 1);
  }
  return sanitized;
};

/**
 * Sanitizes RGB_M color values by clamping to valid ranges
 * @param color - The RGB_M color object to sanitize
 * @returns Sanitized RGB_M color
 */
const sanitizeRGB_M = (color: RGB_M): RGB_M => {
  const sanitized = { ...color };
  sanitized.r = clamp(sanitized.r, 0, 255);
  sanitized.g = clamp(sanitized.g, 0, 255);
  sanitized.b = clamp(sanitized.b, 0, 255);
  return sanitized;
};

/**
 * Sanitizes HSL color values by clamping to valid ranges
 * @param color - The HSL or HSLA color object to sanitize
 * @returns Sanitized HSL or HSLA color
 */
const sanitizeHSL = (color: HSL | HSLA): HSL | HSLA => {
  const sanitized = { ...color };
  sanitized.hue = clamp(sanitized.hue, 0, 360);
  sanitized.saturation = clamp(sanitized.saturation, 0, 100);
  sanitized.lightness = clamp(sanitized.lightness, 0, 100);
  if ("alpha" in sanitized) {
    sanitized.alpha = clamp(sanitized.alpha, 0, 1);
  }
  return sanitized;
};

/**
 * Sanitizes HSL_M color values by clamping to valid ranges
 * @param color - The HSL_M color object to sanitize
 * @returns Sanitized HSL_M color
 */
const sanitizeHSL_M = (color: HSL_M): HSL_M => {
  const sanitized = { ...color };
  sanitized.h = clamp(sanitized.h, 0, 360);
  sanitized.s = clamp(sanitized.s, 0, 100);
  sanitized.l = clamp(sanitized.l, 0, 100);
  return sanitized;
};

/**
 * Sanitizes HSV color values by clamping to valid ranges
 * @param color - The HSV or HSVA color object to sanitize
 * @returns Sanitized HSV or HSVA color
 */
const sanitizeHSV = (color: HSV | HSVA): HSV | HSVA => {
  const sanitized = { ...color };
  sanitized.hue = clamp(sanitized.hue, 0, 360);
  sanitized.saturation = clamp(sanitized.saturation, 0, 100);
  sanitized.value = clamp(sanitized.value, 0, 100);
  if ("alpha" in sanitized) {
    sanitized.alpha = clamp(sanitized.alpha, 0, 1);
  }
  return sanitized;
};

/**
 * Sanitizes HSV_M color values by clamping to valid ranges
 * @param color - The HSV_M color object to sanitize
 * @returns Sanitized HSV_M color
 */
const sanitizeHSV_M = (color: HSV_M): HSV_M => {
  const sanitized = { ...color };
  sanitized.h = clamp(sanitized.h, 0, 360);
  sanitized.s = clamp(sanitized.s, 0, 100);
  sanitized.v = clamp(sanitized.v, 0, 100);
  return sanitized;
};

/**
 * Sanitizes HWB color values by clamping to valid ranges
 * @param color - The HWB color object to sanitize
 * @returns Sanitized HWB color
 */
const sanitizeHWB = (color: HWB): HWB => {
  const sanitized = { ...color };
  sanitized.hue = clamp(sanitized.hue, 0, 360);
  sanitized.whiteness = clamp(sanitized.whiteness, 0, 100);
  sanitized.blackness = clamp(sanitized.blackness, 0, 100);
  return sanitized;
};

/**
 * Sanitizes HWB_M color values by clamping to valid ranges
 * @param color - The HWB_M color object to sanitize
 * @returns Sanitized HWB_M color
 */
const sanitizeHWB_M = (color: HWB_M): HWB_M => {
  const sanitized = { ...color };
  sanitized.h = clamp(sanitized.h, 0, 360);
  sanitized.w = clamp(sanitized.w, 0, 100);
  sanitized.b = clamp(sanitized.b, 0, 100);
  return sanitized;
};

/**
 * Sanitizes CMY color values by clamping to valid ranges
 * @param color - The CMY color object to sanitize
 * @returns Sanitized CMY color
 */
const sanitizeCMY = (color: CMY): CMY => {
  const sanitized = { ...color };
  sanitized.cyan = clamp(sanitized.cyan, 0, 100);
  sanitized.magenta = clamp(sanitized.magenta, 0, 100);
  sanitized.yellow = clamp(sanitized.yellow, 0, 100);
  return sanitized;
};

/**
 * Sanitizes CMY_M color values by clamping to valid ranges
 * @param color - The CMY_M color object to sanitize
 * @returns Sanitized CMY_M color
 */
const sanitizeCMY_M = (color: CMY_M): CMY_M => {
  const sanitized = { ...color };
  sanitized.c = clamp(sanitized.c, 0, 100);
  sanitized.m = clamp(sanitized.m, 0, 100);
  sanitized.y = clamp(sanitized.y, 0, 100);
  return sanitized;
};

/**
 * Sanitizes CMYK color values by clamping to valid ranges
 * @param color - The CMYK color object to sanitize
 * @returns Sanitized CMYK color
 */
const sanitizeCMYK = (color: CMYK): CMYK => {
  const sanitized = { ...color };
  sanitized.cyan = clamp(sanitized.cyan, 0, 100);
  sanitized.magenta = clamp(sanitized.magenta, 0, 100);
  sanitized.yellow = clamp(sanitized.yellow, 0, 100);
  sanitized.key = clamp(sanitized.key, 0, 100);
  return sanitized;
};

/**
 * Sanitizes CMYK_M color values by clamping to valid ranges
 * @param color - The CMYK_M color object to sanitize
 * @returns Sanitized CMYK_M color
 */
const sanitizeCMYK_M = (color: CMYK_M): CMYK_M => {
  const sanitized = { ...color };
  sanitized.c = clamp(sanitized.c, 0, 100);
  sanitized.m = clamp(sanitized.m, 0, 100);
  sanitized.y = clamp(sanitized.y, 0, 100);
  sanitized.k = clamp(sanitized.k, 0, 100);
  return sanitized;
};

/**
 * Sanitizes LAB color values by clamping to valid ranges
 * @param color - The LAB color object to sanitize
 * @returns Sanitized LAB color
 */
const sanitizeLAB = (color: LAB): LAB => {
  const sanitized = { ...color };
  sanitized.luminance = clamp(sanitized.luminance, 0, 100);
  sanitized.a = clamp(sanitized.a, -128, 127);
  sanitized.b = clamp(sanitized.b, -128, 127);
  return sanitized;
};

/**
 * Sanitizes LAB_M color values by clamping to valid ranges
 * @param color - The LAB_M color object to sanitize
 * @returns Sanitized LAB_M color
 */
const sanitizeLAB_M = (color: LAB_M): LAB_M => {
  const sanitized = { ...color };
  sanitized.l = clamp(sanitized.l, 0, 100);
  sanitized.a = clamp(sanitized.a, -128, 127);
  sanitized.b = clamp(sanitized.b, -128, 127);
  return sanitized;
};

/**
 * Sanitizes LCH color values by clamping to valid ranges
 * @param color - The LCH color object to sanitize
 * @returns Sanitized LCH color
 */
const sanitizeLCH = (color: LCH): LCH => {
  const sanitized = { ...color };
  sanitized.lightness = clamp(sanitized.lightness, 0, 100);
  sanitized.chroma = Math.max(0, sanitized.chroma);
  sanitized.hue = clamp(sanitized.hue, 0, 360);
  return sanitized;
};

/**
 * Sanitizes LCH_M color values by clamping to valid ranges
 * @param color - The LCH_M color object to sanitize
 * @returns Sanitized LCH_M color
 */
const sanitizeLCH_M = (color: LCH_M): LCH_M => {
  const sanitized = { ...color };
  sanitized.l = clamp(sanitized.l, 0, 100);
  sanitized.c = Math.max(0, sanitized.c);
  sanitized.h = clamp(sanitized.h, 0, 360);
  return sanitized;
};

/**
 * Sanitizes HCY color values by clamping to valid ranges
 * @param color - The HCY color object to sanitize
 * @returns Sanitized HCY color
 */
const sanitizeHCY = (color: HCY): HCY => {
  const sanitized = { ...color };
  sanitized.hue = clamp(sanitized.hue, 0, 360);
  sanitized.chroma = clamp(sanitized.chroma, 0, 100);
  sanitized.Yluminance = clamp(sanitized.Yluminance, 0, 100);
  return sanitized;
};

/**
 * Sanitizes HCY_M color values by clamping to valid ranges
 * @param color - The HCY_M color object to sanitize
 * @returns Sanitized HCY_M color
 */
const sanitizeHCY_M = (color: HCY_M): HCY_M => {
  const sanitized = { ...color };
  sanitized.h = clamp(sanitized.h, 0, 360);
  sanitized.c = clamp(sanitized.c, 0, 100);
  sanitized.y = clamp(sanitized.y, 0, 100);
  return sanitized;
};

/**
 * Sanitizes RYB color values by clamping to valid ranges
 * @param color - The RYB color object to sanitize
 * @returns Sanitized RYB color
 */
const sanitizeRYB = (color: RYB): RYB => {
  const sanitized = { ...color };
  sanitized.red = clamp(sanitized.red, 0, 255);
  sanitized.yellow = clamp(sanitized.yellow, 0, 255);
  sanitized.blue = clamp(sanitized.blue, 0, 255);
  return sanitized;
};

/**
 * Sanitizes RYB_M color values by clamping to valid ranges
 * @param color - The RYB_M color object to sanitize
 * @returns Sanitized RYB_M color
 */
const sanitizeRYB_M = (color: RYB_M): RYB_M => {
  const sanitized = { ...color };
  sanitized.r = clamp(sanitized.r, 0, 255);
  sanitized.y = clamp(sanitized.y, 0, 255);
  sanitized.b = clamp(sanitized.b, 0, 255);
  return sanitized;
};

/**
 * Sanitizes HSI color values by clamping to valid ranges
 * @param color - The HSI color object to sanitize
 * @returns Sanitized HSI color
 */
const sanitizeHSI = (color: HSI): HSI => {
  const sanitized = { ...color };
  sanitized.hue = clamp(sanitized.hue, 0, 360);
  sanitized.saturation = clamp(sanitized.saturation, 0, 100);
  sanitized.intensity = clamp(sanitized.intensity, 0, 100);
  return sanitized;
};

/**
 * Sanitizes LMS color values by clamping to valid ranges
 * @param color - The LMS color object to sanitize
 * @returns Sanitized LMS color
 */
const sanitizeLMS = (color: LMS): LMS => {
  const sanitized = { ...color };
  sanitized.long = Math.max(0, sanitized.long);
  sanitized.medium = Math.max(0, sanitized.medium);
  sanitized.short = Math.max(0, sanitized.short);
  return sanitized;
};

/**
 * Sanitizes LUV color values by clamping to valid ranges
 * @param color - The LUV color object to sanitize
 * @returns Sanitized LUV color
 */
const sanitizeLUV = (color: LUV): LUV => {
  const sanitized = { ...color };
  sanitized.L = Math.max(0, sanitized.L);
  // u and v can be positive or negative, so no clamping
  return sanitized;
};

/**
 * Sanitizes TSL color values by clamping to valid ranges
 * @param color - The TSL color object to sanitize
 * @returns Sanitized TSL color
 */
const sanitizeTSL = (color: TSL): TSL => {
  const sanitized = { ...color };
  sanitized.tint = clamp(sanitized.tint, 0, 1);
  sanitized.saturation = clamp(sanitized.saturation, 0, 1);
  sanitized.lightness = clamp(sanitized.lightness, 0, 1);
  return sanitized;
};

/**
 * Sanitizes UVW color values by clamping to valid ranges
 * @param color - The UVW color object to sanitize
 * @returns Sanitized UVW color
 */
const sanitizeUVW = (color: UVW): UVW => {
  const sanitized = { ...color };
  sanitized.u = clamp(sanitized.u, -100, 100);
  sanitized.v = clamp(sanitized.v, -100, 100);
  sanitized.w = clamp(sanitized.w, 0, 100);
  return sanitized;
};

/**
 * Sanitizes xvYCC color values by clamping to valid ranges
 * @param color - The xvYCC color object to sanitize
 * @returns Sanitized xvYCC color
 */
const sanitizeXvYCC = (color: xvYCC): xvYCC => {
  const sanitized = { ...color };
  sanitized.Y = clamp(sanitized.Y, 0, 255);
  sanitized.Cb = clamp(sanitized.Cb, 0, 255);
  sanitized.Cr = clamp(sanitized.Cr, 0, 255);
  return sanitized;
};

/**
 * Sanitizes XYZ color values by clamping to valid ranges
 * @param color - The XYZ color object to sanitize
 * @returns Sanitized XYZ color
 */
const sanitizeXYZ = (color: XYZ): XYZ => {
  const sanitized = { ...color };
  sanitized.x = Math.max(0, sanitized.x);
  sanitized.y = Math.max(0, sanitized.y);
  sanitized.z = Math.max(0, sanitized.z);
  return sanitized;
};

/**
 * Sanitizes XYY color values by clamping to valid ranges
 * @param color - The XYY color object to sanitize
 * @returns Sanitized XYY color
 */
const sanitizeXYY = (color: XYY): XYY => {
  const sanitized = { ...color };
  sanitized.x = clamp(sanitized.x, 0, 1);
  sanitized.y = clamp(sanitized.y, 0, 1);
  sanitized.Y = Math.max(0, sanitized.Y);
  return sanitized;
};

/**
 * Sanitizes YCbCr color values by clamping to valid ranges
 * @param color - The YCbCr color object to sanitize
 * @returns Sanitized YCbCr color
 */
const sanitizeYCbCr = (color: YCbCr): YCbCr => {
  const sanitized = { ...color };
  sanitized.Y = clamp(sanitized.Y, 0, 255);
  sanitized.Cb = clamp(sanitized.Cb, 0, 255);
  sanitized.Cr = clamp(sanitized.Cr, 0, 255);
  return sanitized;
};

/**
 * Sanitizes YcCbcCrc color values by clamping to valid ranges
 * @param color - The YcCbcCrc color object to sanitize
 * @returns Sanitized YcCbcCrc color
 */
const sanitizeYcCbcCrc = (color: YcCbcCrc): YcCbcCrc => {
  const sanitized = { ...color };
  sanitized.Yc = clamp(sanitized.Yc, 0, 255);
  sanitized.Cbc = clamp(sanitized.Cbc, 0, 255);
  sanitized.Crc = clamp(sanitized.Crc, 0, 255);
  return sanitized;
};

/**
 * Sanitizes YCoCg color values by clamping to valid ranges
 * @param color - The YCoCg color object to sanitize
 * @returns Sanitized YCoCg color
 */
const sanitizeYCoCg = (color: YCoCg): YCoCg => {
  const sanitized = { ...color };
  sanitized.Y = clamp(sanitized.Y, 0, 255);
  sanitized.Co = clamp(sanitized.Co, -255, 255);
  sanitized.Cg = clamp(sanitized.Cg, -255, 255);
  return sanitized;
};

/**
 * Sanitizes YDbDr color values by clamping to valid ranges
 * @param color - The YDbDr color object to sanitize
 * @returns Sanitized YDbDr color
 */
const sanitizeYDbDr = (color: YDbDr): YDbDr => {
  const sanitized = { ...color };
  sanitized.Y = clamp(sanitized.Y, 0, 255);
  sanitized.Db = clamp(sanitized.Db, -255, 255);
  sanitized.Dr = clamp(sanitized.Dr, -255, 255);
  return sanitized;
};

/**
 * Sanitizes YIQ color values by clamping to valid ranges
 * @param color - The YIQ color object to sanitize
 * @returns Sanitized YIQ color
 */
const sanitizeYIQ = (color: YIQ): YIQ => {
  const sanitized = { ...color };
  sanitized.Y = clamp(sanitized.Y, 0, 255);
  sanitized.I = clamp(sanitized.I, -255, 255);
  sanitized.Q = clamp(sanitized.Q, -255, 255);
  return sanitized;
};

/**
 * Sanitizes YPbPr color values by clamping to valid ranges
 * @param color - The YPbPr color object to sanitize
 * @returns Sanitized YPbPr color
 */
const sanitizeYPbPr = (color: YPbPr): YPbPr => {
  const sanitized = { ...color };
  sanitized.Y = clamp(sanitized.Y, 0, 255);
  sanitized.Pb = clamp(sanitized.Pb, -255, 255);
  sanitized.Pr = clamp(sanitized.Pr, -255, 255);
  return sanitized;
};
