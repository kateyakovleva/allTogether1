import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import AuthLayout from '../../components/layouts/AuthLayout';
import { MediumText, RegularText } from '../../components/ui/AppText';
import LinearGradient from 'react-native-linear-gradient';

type AuthChoiceScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'AuthChoice'>;

const { width } = Dimensions.get('window');

const AuthChoice = () => {
  const navigation = useNavigation<AuthChoiceScreenNavigationProp>();

  return (
    <AuthLayout>
      <View style={styles.container}>
        <View style={styles.centeredContent}>
          <Image 
            source={require('../../assets/images/logo.png')} 
            style={styles.logo}
          />
          
          <RegularText style={styles.welcomeText}>
            WELCOME TO
          </RegularText>
          
          <RegularText style={styles.appName}>
            MALENA
          </RegularText>

          <MediumText style={styles.appRef}>
            Smart Life Organizer
          </MediumText>
        </View>

        <View style={styles.bottomContent}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate('Register')}
          >
            <LinearGradient
              colors={['#596BCE', '#863192', '#D14684']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            >
              <RegularText style={styles.signUpButtonText}>
                SIGN UP
              </RegularText>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <RegularText style={styles.loginButtonText}>
              LOG IN
            </RegularText>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <RegularText style={styles.orText}>OR</RegularText>
            <View style={styles.divider} />
          </View>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require('../../assets/images/googleLogo.png')} 
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require('../../assets/images/yandexLogo.png')} 
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContent: {
    paddingBottom: 30,
  },
  logo: {
    width: 220,
    height: 218,
    resizeMode: 'contain',
  },
  welcomeText: {
    marginTop: 50,
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 1,
    color: '#FAFAFA',
    opacity: 0.7,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  appName: {
    marginTop: 10,
    fontSize: 40,
    lineHeight: 40,
    letterSpacing: 5.2,
    color: '#FFFFFF',
    opacity: 0.8,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  appRef: {
    marginTop: 10,
    fontSize: 30,
    lineHeight: 40,
    letterSpacing: 2.2,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  signUpButton: {
    width: width - 38,
    height: 60,
    borderRadius: 100,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  signUpButtonText: {
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: 1.1,
    color: '#EEEEEE',
    textTransform: 'uppercase',
  },
  loginButton: {
    marginTop: 20,
    width: width - 38,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'rgba(250, 250, 250, 0.05)',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  loginButtonText: {
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: 1.1,
    color: '#EEEEEE',
    textTransform: 'uppercase',
  },
  dividerContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 38,
    paddingHorizontal: 19,
    alignSelf: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    lineHeight: 14,
    color: '#FAFAFA',
    opacity: 0.7,
    textTransform: 'uppercase',
  },
  socialButtonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(250, 250, 250, 0.05)',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  socialIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default AuthChoice; 