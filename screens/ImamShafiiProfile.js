import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';

export default function ImamShafiiProfile({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/shafilogo.png')} style={styles.image} />
      
      <Text style={styles.name}>Imam Al-Shafi'i</Text>

      <Text style={styles.description}>
        Imam Al-Shafi'i (767–820 CE) was a renowned Muslim scholar and jurist,
        and the founder of the Shafi'i school of Islamic jurisprudence. 
        He is known for systematizing the principles of Islamic law (usul al-fiqh)
        and for his deep understanding of both Hadith and Quranic sciences.
      </Text>

      <Button
        title="Ask a Question"
        onPress={() => navigation.navigate('ChatbotScreen', { imamName: 'Imam Al-Shafi\'i' })}
        color="#0077b6"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    padding: 20, 
    backgroundColor: '#fff', 
    alignItems: 'center' 
  },
  image: { 
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 20 
  },
  name: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    textAlign: 'center', 
    color: '#2c3e50' 
  },
  description: { 
    fontSize: 16, 
    textAlign: 'center', 
    marginBottom: 30, 
    color: '#555' 
  },
});
