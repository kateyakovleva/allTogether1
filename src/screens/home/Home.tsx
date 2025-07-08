import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');

const categories = [
  {
    label: 'MEDITATION & MINDFULNESS',
    image: require('../../assets/images/main/mandala1.png'),
  },
  {
    label: 'FACE',
    image: require('../../assets/images/main/mandala2.png'),
  },
  {
    label: 'BODY',
    image: require('../../assets/images/main/mandala3.png'),
  },
  {
    label: "KIDS' SCHEDULE",
    image: require('../../assets/images/main/mandala4.png'),
  },
  {
    label: 'FITNESS ROUTINE',
    image: require('../../assets/images/main/mandala5.png'),
  },
  {
    label: 'INCOME TRACKER & SELF DEVELOPMENT',
    image: require('../../assets/images/main/mandala6.png'),
  },
  {
    label: 'CYCLE & PHASES TRACKING',
    image: require('../../assets/images/main/mandala7.png'),
  },
];

const Home = () => {
  return (
    <ImageBackground source={require('../../assets/images/main/background.png')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={require('../../assets/images/mandala.png')} style={styles.mandala} />
          <Text style={styles.month}>May</Text>
          <Text style={styles.day}>25</Text>
          <Text style={styles.weekday}>Sun</Text>
        </View>
        <View style={styles.categoriesBlock}>
          {categories.map((cat, idx) => (
            <View key={cat.label} style={styles.categoryRow}>
              <Image source={cat.image} style={styles.categoryIcon} />
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.tabBar}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/main/home.png')} style={styles.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabCenter}>
          <Image source={require('../../assets/images/main/calendar.png')} style={styles.tabIconCenter} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/images/main/profile.png')} style={styles.tabIcon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollContent: {
    paddingTop: 40,
    paddingBottom: 120,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mandala: {
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: 'contain',
    position: 'absolute',
    top: -40,
    left: width * 0.1,
    opacity: 0.9,
  },
  month: {
    color: '#fff',
    fontSize: 32,
    fontFamily: 'Lora-Bold',
    marginTop: 60,
    zIndex: 2,
  },
  day: {
    color: '#fff',
    fontSize: 90,
    fontFamily: 'Lora-Bold',
    zIndex: 2,
    marginVertical: -10,
  },
  weekday: {
    color: '#fff',
    fontSize: 32,
    fontFamily: 'Lora-Bold',
    zIndex: 2,
  },
  categoriesBlock: {
    marginTop: width * 0.1,
    width: '90%',
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  categoryIcon: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
    marginRight: 18,
  },
  categoryLabel: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Lora-Regular',
    flexShrink: 1,
  },
  tabBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: 'rgba(11,11,43,0.95)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    zIndex: 10,
  },
  tabIcon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  tabCenter: {
    backgroundColor: '#7B2FF2',
    borderRadius: 32,
    padding: 10,
    marginHorizontal: 10,
  },
  tabIconCenter: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
});

export default Home;