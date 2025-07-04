import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { fonts, FontWeight } from '../../theme/fonts';

interface AppTextProps extends TextProps {
  weight?: FontWeight;
  children: React.ReactNode;
}

const AppText: React.FC<AppTextProps> = ({ weight = 'regular', style, children, ...rest }) => {
  const fontStyle = {
    fontFamily: fonts[weight],
  };

  return (
    <Text style={[fontStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

interface TypedTextProps extends Omit<TextProps, 'children'> {
  children: React.ReactNode;
}

export const RegularText: React.FC<TypedTextProps> = ({ children, ...props }) => (
  <AppText weight="regular" {...props}>
    {children}
  </AppText>
);

export const MediumText: React.FC<TypedTextProps> = ({ children, ...props }) => (
  <AppText weight="medium" {...props}>
    {children}
  </AppText>
);

export const SemiBoldText: React.FC<TypedTextProps> = ({ children, ...props }) => (
  <AppText weight="semibold" {...props}>
    {children}
  </AppText>
);

export const BoldText: React.FC<TypedTextProps> = ({ children, ...props }) => (
  <AppText weight="bold" {...props}>
    {children}
  </AppText>
);

export default AppText; 