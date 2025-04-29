import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';

export default function ImamAhmadProfile({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/imam_ahmad.png')} style={styles.image} />
      
      <Text style={styles.name}>Imam Ahmad ibn Hanbal</Text>

      <Text style={styles.description}>
        Imam Ahmad ibn Hanbal (780–855 CE) was an influential Muslim scholar and theologian,
        and the founder of the Hanbali school of Islamic jurisprudence. 
        He is celebrated for his deep commitment to Hadith and for standing firm 
        during times of political persecution.
      </Text>

      <Button
        title="Ask a Question"
        onPress={() => navigation.navigate('ChatbotScreen', { imamName: 'Imam Ahmad ibn Hanbal' })}
        color="#023e8a"
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

