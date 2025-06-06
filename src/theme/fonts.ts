export const fonts = {
  light: 'Figtree-Light',
  regular: 'Figtree-Regular',
  medium: 'Figtree-Medium',
  semibold: 'Figtree-SemiBold',
  bold: 'Figtree-Bold',
  extrabold: 'Figtree-ExtraBold',
  black: 'Figtree-Black',
} as const;

export type FontWeight = keyof typeof fonts; 