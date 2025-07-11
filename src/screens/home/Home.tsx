import React from 'react';
import { Text, StyleSheet, Image, ScrollView, Dimensions, Pressable, ImageBackground, StatusBar, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../../navigation/types';

const { width, height } = Dimensions.get('window');

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

const categoryImages = [
  require('../../assets/images/main/mandala1.png'),
  require('../../assets/images/main/mandala2.png'),
  require('../../assets/images/main/mandala3.png'),
  require('../../assets/images/main/mandala4.png'),
  require('../../assets/images/main/mandala5.png'),
  require('../../assets/images/main/mandala6.png'),
  require('../../assets/images/main/mandala7.png'),
];

const Home = () => {
  // Получение текущей даты
  const now = new Date();
  const month = now.toLocaleString('en-US', { month: 'long' });
  const day = now.getDate();
  const weekday = now.toLocaleString('en-US', { weekday: 'short' });
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList, 'HomeScreen'>>();

  const handleCategoryPress = (cat: { label: string; image: any }) => {
    navigation.navigate('CategoryDetails', { category: { name: cat.label, image: cat.image } });
  };

  const handleGoToCategory = () => {
    navigation.navigate('CategoryDetails', { category: { name: 'Тестовая категория', image: null } });
  };

  return (
    <ImageBackground
      source={require('../../assets/images/main/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      {/* Первый контейнер: 25% высоты, фон stars.png */}
      <ImageBackground
        source={require('../../assets/images/main/stars.png')}
        style={styles.topContainer}
        resizeMode="cover"
      >
        {/* blure поверх stars */}
        <Image
          source={require('../../assets/images/main/blure.png')}
          style={styles.blure}
          resizeMode="cover"
        />
        {/* flower поверх blure */}
        <Image
          source={require('../../assets/images/main/flower.png')}
          style={styles.flower}
          resizeMode="contain"
        />
        {/* Контент поверх всех слоёв */}
        <View style={styles.header}>
          <Text style={styles.month}>{month}</Text>
          <Text style={styles.day}>{day}</Text>
          <Text style={styles.weekday}>{weekday}</Text>
        </View>
        {/* Градиентный элемент поверх всех, прижат к низу */}
        <LinearGradient
          colors={["#00022000", "#000220"]}
          style={styles.topGradient}
          pointerEvents="none"
        />
      </ImageBackground>
      {/* Второй контейнер: остальная высота, без фона, контент внутри */}
      <View style={styles.bottomContainer}>
        {/* man.png под контентом */}
        <Image
          source={require('../../assets/images/main/man.png')}
          style={styles.man}
          resizeMode="stretch"
        />
        {/* Вместо ScrollView и categoriesBlock: */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
          <TouchableOpacity
            style={{ backgroundColor: 'blue', padding: 24, borderRadius: 12, zIndex: 100 }}
            onPress={handleGoToCategory}
          >
            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>Перейти к категории</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.customTabBar}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/main/home.png')} style={styles.tabIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabCenter}>
            <Image source={require('../../assets/images/main/calendar.png')} style={styles.tabIconCenter} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/images/main/notes.png')} style={styles.tabIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  topContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.33,
    width: '100%',
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    top: height * 0.33,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    flex: 1,
    zIndex: 3,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 120,
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '-5%',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
    flex: 1,
    zIndex: 10,
  },
  month: {
    opacity: 0.8,
    color: '#FAFAFA',
    fontSize: 32,
    fontFamily: 'Lora-Bold',
    zIndex: 2,
  },
  day: {
    opacity: 0.8,
    color: '#FAFAFA',
    fontSize: 130,
    fontFamily: 'Lora-Bold',
    zIndex: 2,
    marginVertical: -30,
  },
  weekday: {
    opacity: 0.8,
    color: '#FAFAFA',
    fontSize: 32,
    fontFamily: 'Lora-Bold',
    zIndex: 2,
  },
  categoriesBlock: {
    marginTop: 100,
    width: '90%',
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0,0,0,0.15)',
    zIndex: 99,
  },
  categoryIcon: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
    marginRight: 18,
  },
  categoryLabel: {
    color: '#fff',
    fontSize: 26,
    fontFamily: 'Lora-Regular',
    fontWeight: '400',
    lineHeight: 31.2,
    letterSpacing: 3,
    flexShrink: 1,
  },
  customTabBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    zIndex: 10,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
  },
  tabIcon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  tabCenter: {
    borderRadius: 32,
    padding: 10,
    marginHorizontal: 10,
  },
  tabIconCenter: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  man: {
    opacity: 0.7,
    position: 'absolute',
    left: '-60%',
    right: 0,
    bottom: '-4%',
    width: '143%',
    height: '100%',
    zIndex: 1,
  },
  blure: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    alignSelf: 'center',
  },
  flower: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 3,
    alignSelf: 'center',
  },
  topGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '20%',
    zIndex: 20
  },
  categoryRowActive: {
    opacity: 0.6,
    borderColor: '#D14684',
  },
});

export default Home;