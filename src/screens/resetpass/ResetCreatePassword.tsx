import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../navigation/types';
import AuthLayout from '../../components/layouts/AuthLayout';
import { RegularText } from '../../components/ui/AppText';
import LinearGradient from 'react-native-linear-gradient';

type ResetCreatePasswordScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'ResetCreatePassword'>;
type ResetCreatePasswordScreenRouteProp = RouteProp<AuthStackParamList, 'ResetCreatePassword'>;

const ResetCreatePassword = () => {
  const navigation = useNavigation<ResetCreatePasswordScreenNavigationProp>();
  const route = useRoute<ResetCreatePasswordScreenRouteProp>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSignUp = () => {
    if (password.length >= 8 && password === confirmPassword) {
      navigation.navigate('ResetConfirmPassword', { email: route.params.email });
    }
  };

  const isFormValid = password.length >= 8 && password === confirmPassword;

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
          <RegularText style={styles.title}>Create a secure password</RegularText>
          
          <RegularText style={styles.description}>
            Your password must be at least 8 characters long and contain a mix of letters, numbers, and symbols.
          </RegularText>

          <View style={styles.inputWrapper}>
            {password.length === 0 && (
              <RegularText style={styles.customPlaceholder}>
                PASSWORD
              </RegularText>
            )}
            <TextInput
              style={[
                styles.input,
                password.length > 0 && styles.inputActive,
              ]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              textAlign="center"
              textAlignVertical="center"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Image
                source={showPassword ? require('../../assets/images/eyehide.png') : require('../../assets/images/eye.png')}
                style={styles.eyeImage}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputWrapper}>
            {confirmPassword.length === 0 && (
              <RegularText style={styles.customPlaceholder}>
                CONFIRM PASSWORD
              </RegularText>
            )}
            <TextInput
              style={[
                styles.input,
                confirmPassword.length > 0 && styles.inputActive,
              ]}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              textAlign="center"
              textAlignVertical="center"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Image
                source={showConfirmPassword ? require('../../assets/images/eyehide.png') : require('../../assets/images/eye.png')}
                style={styles.eyeImage}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity
            style={[styles.button, isFormValid && styles.buttonActive]}
            onPress={handleSignUp}
            disabled={!isFormValid}
          >
            {isFormValid ? (
              <LinearGradient
                colors={['#596BCE', '#863192', '#D14684']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
              >
                <RegularText style={styles.buttonTextActive}>SIGN UP</RegularText>
              </LinearGradient>
            ) : (
              <RegularText style={styles.buttonText}>SIGN UP</RegularText>
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
  description: {
    fontFamily: 'Lora-Regular',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.8,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 55,
  },
  inputWrapper: {
    width: '100%',
    height: 60,
    marginBottom: 20,
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
  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  eyeImage: {
    width: 24,
    height: 24,
    tintColor: '#EEEEEE',
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
});

export default ResetCreatePassword; 