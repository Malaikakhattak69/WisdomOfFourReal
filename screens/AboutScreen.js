import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Colors from '../constants/colors';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>About Wisdom of Four</Text>
      <Text style={styles.text}>
        "Wisdom of Four" is an educational app designed to help Muslims explore the teachings, lives,
        and scholarly contributions of the four great Imams of Sunni Islam: Imam Malik, Imam Abu Hanifa,
        Imam Shafi’i, and Imam Ahmad ibn Hanbal.
      </Text>

      <Text style={styles.sectionTitle}>Our Mission</Text>
      <Text style={styles.text}>
        To provide accessible, organized, and authentic Islamic knowledge inspired by the
        rich legacy of classical scholarship.
      </Text>

      <Text style={styles.sectionTitle}>Features</Text>
      <Text style={styles.text}>• Biographies of Imams</Text>
      <Text style={styles.text}>• Quotes & Hadiths</Text>
      <Text style={styles.text}>• Chatbot Q&A (AI-powered)</Text>
      <Text style={styles.text}>• Save & Share Learnings</Text>

      <Text style={styles.footer}>© 2025 Wisdom of Four. All rights reserved.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
  },
  content: {
    paddingVertical: 30,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.accent,
    marginTop: 20,
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
    marginBottom: 10,
  },
  footer: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 30,
  },
});
