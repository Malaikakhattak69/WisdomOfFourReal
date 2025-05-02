import React from 'react';
import { ScrollView, Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/colors'; // Ensure you have a colors file for theme colors

export default function ImamMalikProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Imam Malik Name */}
      <Text style={styles.header}>Imam Malik ibn Anas</Text>

      {/* Imam Malik Image Section */}
      <Image
        source={require('../assets/imam_malik.png')} // Make sure to provide a valid image path
        style={styles.image}
      />

      {/* Biography Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Biography</Text>
        <Text style={styles.text}>
          Imam Malik ibn Anas (711–795 CE) was a prominent Islamic scholar and the founder of the Maliki school of thought, one of the four major Sunni schools of Islamic jurisprudence. Born in Medina, he was raised in a scholarly family and spent much of his life studying and teaching in the Prophet’s city.
        </Text>
      </View>

      {/* History Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>History</Text>
        <Text style={styles.text}>
          <Text style={styles.subheading}>Early Life and Education:</Text>{'\n'}
          Imam Malik was born in 711 CE in Medina, a city closely associated with the Prophet Muhammad (PBUH). He was born into a family of scholars, where his grandfather was a notable scholar in the early Islamic period. Imam Malik began his studies early under various scholars, including Rabi' ibn Abi Abdurrahman and Ibn Shuhba. He studied extensively the teachings of the Prophet (PBUH) through the narrations of the companions of the Prophet in Medina.

          {'\n\n'}<Text style={styles.subheading}>Teaching Career:</Text>{'\n'}
          Imam Malik became one of the most influential scholars of his time. His most notable work, **Al-Muwatta'**, compiled both the sayings of the Prophet Muhammad (PBUH) and the practices of the people of Medina, becoming one of the earliest and most influential compilations of Hadith and Islamic law. He was known for his rigorous scholarship and was recognized as a primary authority in Islamic jurisprudence, attracting scholars from all parts of the Muslim world to Medina for his teachings.

          {'\n\n'}<Text style={styles.subheading}>Key Contributions:</Text>{'\n'}
          • **Author of Al-Muwatta'** – Imam Malik’s compilation of Hadith, which remains one of the most respected texts in Islamic history.{'\n'}
          • **Founder of the Maliki Madhhab** – One of the four major Sunni schools of Islamic jurisprudence.{'\n'}
          • **Emphasis on the Practices of the People of Medina** – Imam Malik believed that the practices of the people of Medina were a significant source of Islamic law, as they were closest to the traditions of the Prophet Muhammad (PBUH).
        </Text>
      </View>

      {/* Chatbot Section */}
      <TouchableOpacity
        style={styles.askButton}
        onPress={() => navigation.navigate('MalikChatbot')}
      >
        <Text style={styles.askButtonText}>Ask a Question</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  header: {
    fontSize: 32, // Increased font size
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#000', // Shadow for better contrast
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.secondary,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
    marginBottom: 16,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  askButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  askButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
