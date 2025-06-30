import { fonts } from './fonts';

export const typography = {
  h1: {
    fontFamily: fonts.regular,
    fontSize: 32,
    lineHeight: 40,
  },
  h2: {
    fontFamily: fonts.bold,
    fontSize: 24,
    lineHeight: 32,
  },
  h3: {
    fontFamily: fonts.semibold,
    fontSize: 20,
    lineHeight: 28,
  },
  body1: {
    fontFamily: fonts.regular,
    fontSize: 16,
    lineHeight: 24,
  },
  body2: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    fontFamily: fonts.semibold,
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 16,
  },
} as const; 