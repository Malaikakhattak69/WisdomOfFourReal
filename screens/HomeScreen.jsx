import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../components/Button/CustomButton';
import InfoCard from '../components/Card/InfoCard';

const HomeScreen = () => {
  const handlePress = () => {
    alert('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <InfoCard
        title="React Native Card"
        description="This is a sample reusable card component."
      />
      <CustomButton title="Click Me" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default HomeScreen;
