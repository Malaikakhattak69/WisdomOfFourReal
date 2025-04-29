import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SettingsScreen({ navigation }) {
  const handleLogout = () => {
    navigation.replace('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <Button title="Logout" onPress={handleLogout} color="#FF5722" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
});
