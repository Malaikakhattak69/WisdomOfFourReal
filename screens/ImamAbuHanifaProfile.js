import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';

export default function ImamAbuHanifaProfile({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/hanifalogo.png')} style={styles.image} />
      
      <Text style={styles.name}>Imam Abu Hanifa</Text>

      <Text style={styles.description}>
        Imam Abu Hanifa (699–767 CE) was a prominent Islamic scholar and jurist, 
        and the founder of the Hanafi school of Islamic jurisprudence — the most widely 
        followed school in the Muslim world. Known for his logical reasoning and use 
        of analogical deduction (qiyas), he played a crucial role in formulating Islamic law (fiqh).
      </Text>

      <Button
        title="Ask a Question"
        onPress={() => navigation.navigate('ChatbotScreen', { imamName: 'Imam Abu Hanifa' })}
        color="#0096c7"
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
