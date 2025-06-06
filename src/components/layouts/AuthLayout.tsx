import React from 'react';
import { View, StyleSheet, ImageBackground, StatusBar, Dimensions } from 'react-native';
import authBack from '../../assets/images/authBack.png';
import { typography } from '../../theme/typography';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const { width, height } = Dimensions.get('window');

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ImageBackground 
        source={authBack} 
        style={styles.background}
        resizeMode="cover"
      >
     
          <View style={styles.container}>
            {children}
          </View>
  
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
    width,
    height,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
});

export default AuthLayout; 