import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppText from '../../components/ui/AppText';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <AppText style={styles.title} weight="bold">Главная</AppText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
  },
});

export default Home; 