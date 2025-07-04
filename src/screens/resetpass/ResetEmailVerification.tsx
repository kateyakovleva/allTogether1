import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image, TextInput as RNTextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../navigation/types';
import AuthLayout from '../../components/layouts/AuthLayout';
import { RegularText } from '../../components/ui/AppText';
import LinearGradient from 'react-native-linear-gradient';

type ResetEmailVerificationScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'ResetEmailVerification'>;
type ResetEmailVerificationScreenRouteProp = RouteProp<AuthStackParamList, 'ResetEmailVerification'>;

const ResetEmailVerification = () => {
  const navigation = useNavigation<ResetEmailVerificationScreenNavigationProp>();
  const route = useRoute<ResetEmailVerificationScreenRouteProp>();
  const [code, setCode] = useState('');
  const inputRef = useRef<RNTextInput>(null);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    if (code.length === 6) {
      navigation.navigate('ResetCreatePassword', { email: route.params.email });
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
            resizeMode="contain"
          />
        </View>
        <View style={styles.contentContainer}>
          <RegularText style={styles.title}>
            Enter the 6-digit code sent to your email
          </RegularText>
          
          <RegularText style={styles.description}>
            We've sent a verification code to your Email. Please enter it below to continue.
          </RegularText>

          <View style={styles.inputWrapper}>
            {code.length === 0 && (
              <RegularText style={styles.customPlaceholder}>
                _  _  _  _  _  _
              </RegularText>
            )}
            <TextInput
              ref={inputRef}
              style={[
                styles.input,
                code.length > 0 && styles.inputActive,
              ]}
              value={code}
              onChangeText={(text) => {
                const numericText = text.replace(/[^0-9]/g, '');
                setCode(numericText);
              }}
              maxLength={6}
              keyboardType="number-pad"
              textAlign="center"
              textAlignVertical="center"
            />
          </View>

          <RegularText style={styles.resendText}>
            Didn't receive the code?
          </RegularText>

          <View style={styles.timerContainer}>
            <RegularText style={styles.timerText}>
              You can resend it in <RegularText style={styles.timerValue}>00:45</RegularText>
            </RegularText>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity
            style={[styles.button, code.length === 6 && styles.buttonActive]}
            onPress={handleContinue}
            disabled={code.length !== 6}
          >
            {code.length === 6 ? (
              <LinearGradient
                colors={['#596BCE', '#863192', '#D14684']}
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
    paddingTop: 80,
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
    marginBottom: 10,
    paddingHorizontal: 40,
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
    fontSize: 28,
    letterSpacing: 0.9,
    fontFamily: 'Lora-Regular',
    opacity: 0.7,
    zIndex: 1,
    includeFontPadding: false,
    pointerEvents: 'none',
    textAlign: 'center',
    paddingTop: 10,
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
    fontSize: 28,
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
  resendText: {
    fontFamily: 'Lora-Regular',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.8,
    textAlign: 'center',
    color: '#FAFAFA',
    marginBottom: 5,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  timerText: {
    fontFamily: 'Lora-Regular',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.8,
    textAlign: 'center',
    color: '#757575',
  },
  timerValue: {
    color: '#EEEEEE',
    fontWeight: '400',
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

export default ResetEmailVerification; 