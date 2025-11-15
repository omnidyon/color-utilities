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
export const sanitizeColor = (space: string, color: any): any => {
  if (!color || typeof color !== 'object') return null;
  
  if (space === 'hex' && typeof color === 'string') {
    const hex = color.replace(/[^0-9A-F]/gi, '').toUpperCase();
    return hex.length === 3 ? hex.split('').map(ch => ch + ch).join('') : 
           hex.length === 6 ? hex : null;
  }

  const sanitized = { ...color };
  
  // Simple range-based sanitization
  switch (space) {
    case 'rgb':
    case 'rgb_m':
    case 'rgba': 
    case 'rgba_m':
      sanitized.red = sanitized.red != null ? clamp(sanitized.red, 0, 255) : sanitized.r;
      sanitized.green = sanitized.green != null ? clamp(sanitized.green, 0, 255) : sanitized.g;
      sanitized.blue = sanitized.blue != null ? clamp(sanitized.blue, 0, 255) : sanitized.b;
      if (space.includes('a')) sanitized.alpha = clamp(sanitized.alpha ?? sanitized.a, 0, 1);
      break;
      
    case 'hsl':
    case 'hsl_m':
      sanitized.hue = sanitized.hue != null ? clamp(sanitized.hue, 0, 360) : sanitized.h;
      sanitized.saturation = sanitized.saturation != null ? clamp(sanitized.saturation, 0, 100) : sanitized.s;
      sanitized.lightness = sanitized.lightness != null ? clamp(sanitized.lightness, 0, 100) : sanitized.l ?? sanitized.v;
      if (space.includes('a')) sanitized.alpha = clamp(sanitized.alpha ?? sanitized.a, 0, 1);
      break;

    case 'hsv':
    case 'hsv_m':
      sanitized.hue = sanitized.hue != null ? clamp(sanitized.hue, 0, 360) : sanitized.h;
      sanitized.saturation = sanitized.saturation != null ? clamp(sanitized.saturation, 0, 100) : sanitized.s;
      sanitized.value = sanitized.value != null ? clamp(sanitized.value, 0, 100) : sanitized.v;
       if (space.includes('a')) sanitized.alpha = clamp(sanitized.alpha ?? sanitized.a, 0, 1);
      break;
      
    case 'cmy':
    case 'cmy_m':
    case 'cmyk':
    case 'cmyk_m':
      sanitized.cyan = sanitized.cyan != null ? clamp(sanitized.cyan, 0, 100) : sanitized.c;
      sanitized.magenta = sanitized.magenta != null ? clamp(sanitized.magenta, 0, 100) : sanitized.m;
      sanitized.yellow = sanitized.yellow != null ? clamp(sanitized.yellow, 0, 100) : sanitized.y;
      if (space.includes('k')) sanitized.key = clamp(sanitized.key ?? sanitized.k, 0, 100);
      break;
      
    case 'lab':
    case 'lab_m':
      sanitized.luminance = sanitized.luminance != null ? clamp(sanitized.luminance, 0, 100) : sanitized.l;
      break;
      
    case 'lch':
    case 'lch_m':
      sanitized.lightness = sanitized.lightness != null ? clamp(sanitized.lightness, 0, 100) : sanitized.l;
      sanitized.hue = sanitized.hue != null ? clamp(sanitized.hue, 0, 360) : sanitized.h;
      sanitized.chroma = Math.max(0, sanitized.chroma ?? sanitized.c);
      break;
         
      
    default:
      return color;
  }
  
  return sanitized;
};

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}