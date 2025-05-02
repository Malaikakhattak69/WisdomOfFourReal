import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
  <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
  <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
  <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Home" component={HomeScreen} />

  <Stack.Screen name="ImamMalikProfile" component={ImamMalikProfile} options={{ title: 'Imam Malik Profile' }} />
  <Stack.Screen name="MalikChatbot" component={MalikChatbot} options={{ title: 'Ask Imam Malik' }} />
</Stack.Navigator>

    </NavigationContainer>
  );
}
