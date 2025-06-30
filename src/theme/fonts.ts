export const fonts = {
  regular: 'Lora-Regular',
  medium: 'Lora-Medium',
  semibold: 'Lora-SemiBold',
  bold: 'Lora-Bold',
} as const;

export type FontWeight = keyof typeof fonts; 