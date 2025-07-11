/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { AuthProvider } from './src/context/AuthContext';
const App = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer
        fallback={
          <View style={styles.fallback}>
            <Text style={styles.fallbackText}>Loading...</Text>
    </View>
        }
      >
        <RootNavigator />
      </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  fallbackText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default App;
