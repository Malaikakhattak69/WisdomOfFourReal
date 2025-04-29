import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ImamMalikProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imam Malik Image */}
      <Image
        source={require('../assets/imam_malik.png')} // Ensure this image exists inside the /assets folder
        style={styles.profileImage}
        onError={(error) => console.log('Error loading image:', error)} // Error handling for the image
      />

      {/* Name */}
      <Text style={styles.title}>Imam Malik ibn Anas (رحمه الله)</Text>

      {/* Short Bio */}
      <Text style={styles.description}>
        Imam Malik was a renowned scholar and jurist, the founder of the Maliki school of thought. He lived in Madinah and compiled the famous book Al-Muwatta.{"\n\n"}
        His teachings emphasized the practices of the people of Madinah and the traditions of the Prophet Muhammad ﷺ.
      </Text>

      {/* Button to Chatbot */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('MalikChatbot')} // Ensure 'MalikChatbot' screen is properly registered in the navigator
      >
        <Text style={styles.buttonText}>Ask Imam Malik Bot</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImamMalikProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#4a90e2',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});