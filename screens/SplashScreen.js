// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LoginScreen'); // or your main screen
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logoo.jpeg')} // Place your logo here
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Wisdom of Four</Text>
        <Text style={styles.subtitle}>A Journey Through Islamic Knowledge</Text>
      </View>
    </View>
  );
};

const colors = {
  background: '#F5F5F5',
  primary: '#0C5C4C',
  accent: '#D9A74A',
  text: '#2C2C2C',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text,
    fontStyle: 'italic',
  },
});

export default SplashScreen;
