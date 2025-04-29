import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../constants/colors';

export default function HomeScreen({ navigation }) {
  const imams = [
    { name: 'Imam Malik', screen: 'MalikChatbot' },
    { name: 'Imam Abu Hanifa', screen: 'HanifaChatbot' },
    { name: 'Imam Shafi’i', screen: 'ShafiiChatbot' },
    { name: 'Imam Ahmad', screen: 'AhmadChatbot' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Wisdom of Four</Text>
      <Text style={styles.subtitle}>Choose an Imam to ask questions:</Text>

      {imams.map((imam, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate(imam.screen)}
        >
          <Text style={styles.buttonText}>{imam.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
