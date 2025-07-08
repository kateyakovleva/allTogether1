import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import AuthLayout from '../../components/layouts/AuthLayout';
import { RegularText } from '../../components/ui/AppText';
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from '../../context/AuthContext';

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

const { width } = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { login } = useAuth();
  const validateEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };

  const validatePassword = (text: string) => {
    return text.length >= 6;
  };

  const handleEmailChange = (text: string) => {
    setEmail(text.toLowerCase());
    setEmailError(!validateEmail(text));
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setPasswordError(!validatePassword(text));
  };

  const isFormValid = validateEmail(email) && validatePassword(password);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    if (isFormValid) {
      login();
    }
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
          />
        </View>
        
        <View style={styles.contentContainer}>
          <View style={styles.inputWrapper}>
            {email.length === 0 && (
              <RegularText style={styles.customPlaceholder}>
                EMAIL
              </RegularText>
            )}
            <TextInput
              style={[
                styles.input,
                emailError && styles.inputError,
                email && styles.inputActive
              ]}
              value={email}
              onChangeText={handleEmailChange}
              autoCapitalize="none"
              keyboardType="email-address"
              textAlign="center"
              textAlignVertical="center"
            />
          </View>

          <View style={styles.passwordContainer}>
            <View style={styles.inputWrapper}>
              {password.length === 0 && (
                <RegularText style={styles.customPlaceholder}>
                  PASSWORD
                </RegularText>
              )}
              <TextInput
                style={[
                  styles.input,
                  passwordError && styles.inputError,
                  password && styles.inputActive
                ]}
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                textAlign="center"
                textAlignVertical="center"
              />
            </View>
            {password && (
              <TouchableOpacity 
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Image 
                  source={showPassword ? 
                    require('../../assets/images/eyehide.png') : 
                    require('../../assets/images/eye.png')
                  } 
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.divider} />

          <TouchableOpacity
            style={[styles.button, isFormValid && styles.buttonActive]}
            disabled={!isFormValid}
            onPress={handleLogin}
          >
            {isFormValid ? (
              <LinearGradient
                colors={['#596BCE', '#863192', '#D14684']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
              >
                <RegularText style={styles.buttonTextActive}>
                  LOG IN
                </RegularText>
              </LinearGradient>
            ) : (
              <RegularText style={styles.buttonText}>
                LOG IN
              </RegularText>
            )}
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('ResetPassword')}
          >
            <RegularText style={styles.forgotPasswordText}>
              Forgot password?
            </RegularText>
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
    paddingBottom: 30,
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
  input: {
    width: '100%',
    height: 60,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    backgroundColor: 'rgba(250, 250, 250, 0.05)',
    color: '#EEEEEE',
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: 0.9,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Lora-Regular',
    borderRadius: 100,
  },
  inputActive: {
    borderColor: '#C488B8',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FAFAFA',
    fontFamily: 'Lora-Regular',
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  passwordContainer: {
    position: 'relative',
    marginTop: 20,
  },
  eyeButton: {
    position: 'absolute',
    right: 20,
    top: '50%',
    transform: [{ translateY: -12 }],
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  divider: {
    height: 1,
    backgroundColor: '#616161',
    marginTop: 20,
    marginHorizontal: 70,
  },
  button: {
    width: '100%',
    height: 60,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    backgroundColor: 'rgba(250, 250, 250, 0.05)',
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
    color: '#EEEEEE',
    textTransform: 'uppercase',
  },
  buttonTextActive: {
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: 1.1,
    color: '#EEEEEE',
    textTransform: 'uppercase',
  },
  forgotPassword: {
    marginTop: 30,
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontFamily: 'Figtree-Light',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.8,
    color: '#FAFAFA',
    textAlign: 'center',
  },
  inputWrapper: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  customPlaceholder: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#EEEEEE',
    fontSize: 18,
    letterSpacing: 0.9,
    fontFamily: 'Lora-Regular',
    opacity: 0.7,
    zIndex: 1,
    includeFontPadding: false,
    pointerEvents: 'none',
    textAlign: 'center',
    paddingTop: 18,
    paddingBottom: 12,
  },
});

export default Login; 