import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../navigation/types';
import LinearGradient from 'react-native-linear-gradient';
import { RegularText } from '../../components/ui/AppText';
import AuthLayout from '../../components/layouts/AuthLayout';

type CreatePasswordScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'CreatePassword'>;
type CreatePasswordScreenRouteProp = RouteProp<AuthStackParamList, 'CreatePassword'>;

const CreatePassword = () => {
  const navigation = useNavigation<CreatePasswordScreenNavigationProp>();
  const route = useRoute<CreatePasswordScreenRouteProp>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSignUp = () => {
    if (password && confirmPassword && password === confirmPassword) {
      // Handle sign up logic
      navigation.navigate('Home');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
            Create a secure password
          </RegularText>

          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                password.length > 0 && styles.inputActive,
              ]}
              placeholder="ENTER PASSWORD"
              placeholderTextColor="#9E9E9E"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            {password.length > 0 && (
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={togglePasswordVisibility}
                activeOpacity={0.7}
              >
                <Image
                  source={showPassword ? require('../../assets/images/eyehide.png') : require('../../assets/images/eye.png')}
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                confirmPassword.length > 0 && styles.inputActive,
              ]}
              placeholder="REPIAT PASSWORD"
              placeholderTextColor="#9E9E9E"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            {confirmPassword.length > 0 && (
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={toggleConfirmPasswordVisibility}
                activeOpacity={0.7}
              >
                <Image
                  source={showConfirmPassword ? require('../../assets/images/eyehide.png') : require('../../assets/images/eye.png')}
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.divider} />

          <TouchableOpacity
            style={[styles.button, password && confirmPassword && styles.buttonActive]}
            onPress={handleSignUp}
            disabled={!password || !confirmPassword}
          >
            {password && confirmPassword ? (
              <LinearGradient
                colors={['#13427F', '#6D0E6B']}
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
    marginBottom: 20,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 10,
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
  },
  inputActive: {
    borderColor: '#881878',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FAFAFA',
    fontFamily: 'Figtree-Regular',
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
    marginBottom: 20,
    marginTop: 10,
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

export default CreatePassword; 