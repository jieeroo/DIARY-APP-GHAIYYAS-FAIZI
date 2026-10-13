import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { diaryEntries } from '../data/diaryEntries';
import { styles } from '../styles/DiaryListScreenStyles';

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Buku Harian</Text>

      {diaryEntries.map((entry) => (
        <View key={entry.id} style={styles.card}>
          <Image source={{ uri: entry.moodUri }} style={styles.mood} />

          <View style={styles.cardContent}>
            <Text style={styles.title} numberOfLines={1}>
              {entry.title}
            </Text>
            <Text style={styles.date}>{entry.date}</Text>
            <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
              {entry.preview}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}