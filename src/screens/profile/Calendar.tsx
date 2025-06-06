import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AppText from '../../components/ui/AppText';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../navigation/types';

type CalendarScreenNavigationProp = NativeStackNavigationProp<ProfileStackParamList, 'Calendar'>;

const Calendar = () => {
  const navigation = useNavigation<CalendarScreenNavigationProp>();

  const events = [
    {
      id: '1',
      title: 'Футбольный матч',
      date: '2024-06-10',
      time: '15:00',
      location: 'Стадион "Спартак"',
    },
    {
      id: '2',
      title: 'Теннисный турнир',
      date: '2024-06-15',
      time: '12:00',
      location: 'Теннисный клуб "Чемпион"',
    },
    {
      id: '3',
      title: 'Баскетбольная игра',
      date: '2024-06-20',
      time: '18:30',
      location: 'Спорткомплекс "Олимп"',
    },
  ];

  const renderEvent = (event: typeof events[0]) => (
    <TouchableOpacity
      key={event.id}
      style={styles.eventCard}
      onPress={() => navigation.navigate('EventDetails', { event })}
    >
      <AppText style={styles.eventTitle} weight="semibold">{event.title}</AppText>
      <AppText style={styles.eventDate}>{event.date} {event.time}</AppText>
      <AppText style={styles.eventLocation}>{event.location}</AppText>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <AppText style={styles.title} weight="bold">Календарь событий</AppText>
      <ScrollView style={styles.scrollView}>
        {events.map(renderEvent)}
      </ScrollView>
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
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  eventCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 14,
    color: '#666',
  },
});

export default Calendar; 