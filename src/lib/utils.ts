import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const toBase64 = (str: string) => {
	return typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str);
};

/**
 * Images utils
 */

export const shimmerSvgGenerator = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f3f3f3" offset="20%" />
      <stop stop-color="#e0e0e0" offset="50%" />
      <stop stop-color="#f3f3f3" offset="80%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f3f3f3" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.5s" repeatCount="indefinite"  />
</svg>`;

export const shimmerPlaceholderGenerator = (w: number, h: number) => {
	return `data:image/svg+xml;base64,${toBase64(
		shimmerSvgGenerator(w, h),
	)}` as const;
};


