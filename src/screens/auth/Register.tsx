import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import LinearGradient from 'react-native-linear-gradient';
import { RegularText } from '../../components/ui/AppText';
import AuthLayout from '../../components/layouts/AuthLayout';

type RegisterScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;

const Register = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const validateEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setIsEmailValid(validateEmail(text));
  };

  const handleContinue = () => {
    if (validateEmail(email)) {
      navigation.navigate('EmailVerification', { email });
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <AuthLayout>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={handleBackPress}
        activeOpacity={0.7}
      >
        <Image 
          source={require('../../assets/images/arrow.png')} 
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/biglogo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.contentContainer}>
          <RegularText style={styles.title}>Sign up with Email</RegularText>
          <TextInput
            style={[
              styles.input,
              email.length > 0 && styles.inputActive,
              !isEmailValid && styles.inputError,
            ]}
            placeholder="ENTER YOUR EMAIL"
            placeholderTextColor="#9E9E9E"
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.divider} />
          <TouchableOpacity
            style={[styles.button, email.length > 0 && styles.buttonActive]}
            onPress={handleContinue}
            disabled={!validateEmail(email)}
          >
            {email.length > 0 ? (
              <LinearGradient
                colors={['#13427F', '#6D0E6B']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
              >
                <RegularText style={styles.buttonTextActive}>CONTINUE</RegularText>
              </LinearGradient>
            ) : (
              <RegularText style={styles.buttonText}>CONTINUE</RegularText>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 35,
    left: 20,
    zIndex: 1,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    paddingTop: 100,
    paddingRight: 19,
    paddingBottom: 50,
    paddingLeft: 20,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 347,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 26,
    lineHeight: 26,
    letterSpacing: 1.3,
    color: '#FAFAFA',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 60,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#616161',
    backgroundColor: '#FAFAFA0D',
    color: '#9E9E9E',
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: 0.9,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Figtree-Light',
    borderRadius: 100,
    marginBottom: 20,
  },
  inputActive: {
    borderColor: '#881878',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FAFAFA',
    fontFamily: 'Figtree-Regular',
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  divider: {
    height: 1,
    backgroundColor: '#616161',
    marginBottom: 20,
    marginHorizontal: 70,
  },
  button: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#616161',
    backgroundColor: '#FAFAFA0D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonActive: {
    borderWidth: 0,
    overflow: 'hidden',
    borderRadius: 100,
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: 1.1,
    color: '#9E9E9E',
    textTransform: 'uppercase',
  },
  buttonTextActive: {
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: 1.1,
    color: '#EEEEEE',
    textTransform: 'uppercase',
  },
});

export default Register; 