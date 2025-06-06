import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AppText from '../../components/ui/AppText';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../navigation/types';

type ProfileScreenNavigationProp = NativeStackNavigationProp<ProfileStackParamList, 'ProfileScreen'>;

const Profile = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const menuItems = [
    { title: 'Редактировать профиль', screen: 'EditProfile' },
    { title: 'Изменить пароль', screen: 'ChangePassword' },
    { title: 'Создать событие', screen: 'CreateEvent' },
    { title: 'Календарь', screen: 'Calendar' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.title} weight="bold">Профиль</AppText>
      </View>

      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen as keyof ProfileStackParamList)}
          >
            <AppText style={styles.menuItemText}>{item.title}</AppText>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menu: {
    padding: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Profile; 