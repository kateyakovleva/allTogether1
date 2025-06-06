import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AppText from '../../components/ui/AppText';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/types';

type CategoriesScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'CategoryDetails'>;

const Categories = () => {
  const navigation = useNavigation<CategoriesScreenNavigationProp>();

  const categories = [
    { id: '1', name: 'Спорт' },
    { id: '2', name: 'Кино' },
    { id: '3', name: 'Музыка' },
    { id: '4', name: 'Искусство' },
    { id: '5', name: 'Еда' },
  ];

  const renderItem = ({ item }: { item: typeof categories[0] }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('CategoryDetails', { category: item })}
    >
      <AppText style={styles.categoryName} weight="medium">{item.name}</AppText>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Категории</Text>
      <FlatList
        data={categories}
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
  categoryItem: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Categories; 