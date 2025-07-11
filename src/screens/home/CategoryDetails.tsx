import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import AppText from '../../components/ui/AppText';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/types';

type CategoryDetailsScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'CategoryDetails'>;
type CategoryDetailsScreenRouteProp = RouteProp<HomeStackParamList, 'CategoryDetails'>;

const CategoryDetails = () => {
  const navigation = useNavigation<CategoryDetailsScreenNavigationProp>();
  const route = useRoute<CategoryDetailsScreenRouteProp>();
  const { category } = route.params;

  const events = [
    { id: '1', title: 'Футбольный матч', date: '2024-06-10' },
    { id: '2', title: 'Теннисный турнир', date: '2024-06-15' },
    { id: '3', title: 'Баскетбольная игра', date: '2024-06-20' },
  ];

  const renderItem = ({ item }: { item: typeof events[0] }) => (
    <TouchableOpacity
      style={styles.eventItem}
      onPress={() => navigation.navigate('EventDetails', { event: item })}
    >
      <AppText style={styles.eventTitle} weight="semibold">{item.title}</AppText>
      <AppText style={styles.eventDate}>{item.date}</AppText>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {category.image && (
        <Image source={category.image} style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 20, marginBottom: 10 }} />
      )}
      <AppText style={styles.title} weight="bold">{category.name}</AppText>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
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
  list: {
    padding: 20,
  },
  eventItem: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default CategoryDetails; 