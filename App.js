import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ImamMalikProfileScreen from './screens/ImamMalikProfile'; // Make sure the filename matches
import ImamAbuHanifaProfile from './screens/ImamAbuHanifaProfile';
import ImamShafiiProfile from './screens/ImamShafiiProfile';
import ImamAhmadProfile from './screens/ImamAhmadProfile';
import MalikChatbot from './screens/MalikChatbot'; // Import the chatbot screen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ImamMalikProfile" component={ImamMalikProfileScreen} />
        <Stack.Screen name="MalikChatbot" component={MalikChatbot} />
        <Stack.Screen name="ImamAbuHanifaProfile" component={ImamAbuHanifaProfile} />
        <Stack.Screen name="ImamShafiiProfile" component={ImamShafiiProfile} />
        <Stack.Screen name="ImamAhmadProfile" component={ImamAhmadProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}