import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import AuthLayout from '../../components/layouts/AuthLayout';
import { typography } from '../../theme/typography';
import AppText from '../../components/ui/AppText';

type CreatePasswordScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'CreatePassword'>;

const CreatePassword = () => {
  const navigation = useNavigation<CreatePasswordScreenNavigationProp>();

  return (
    <AuthLayout>
      <AppText style={[styles.title, typography.h1]} weight="bold">Создание пароля</AppText>
      <TextInput
        style={styles.input}
        placeholder="Новый пароль"
        placeholderTextColor="#FFFFFF"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Подтвердите пароль"
        placeholderTextColor="#FFFFFF"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <AppText style={[styles.buttonText, typography.button]} weight="semibold">Создать пароль</AppText>
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
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    color: '#FFFFFF',
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

export default CreatePassword; 