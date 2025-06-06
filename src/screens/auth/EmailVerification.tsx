import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import AuthLayout from '../../components/layouts/AuthLayout';
import { typography } from '../../theme/typography';
import AppText from '../../components/ui/AppText';

type EmailVerificationScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'EmailVerification'>;

const EmailVerification = () => {
  const navigation = useNavigation<EmailVerificationScreenNavigationProp>();

  return (
    <AuthLayout>
      <AppText style={[styles.title, typography.h1]} weight="bold">Подтверждение Email</AppText>
      <AppText style={[styles.description, typography.body1]}>Мы отправили код подтверждения на ваш email. Пожалуйста, проверьте почту и введите код ниже.</AppText>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreatePassword')}
      >
        <AppText style={[styles.buttonText, typography.button]} weight="semibold">Подтвердить</AppText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <AppText style={styles.linkText}>Назад</AppText>
      </TouchableOpacity>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '100%',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default EmailVerification; 