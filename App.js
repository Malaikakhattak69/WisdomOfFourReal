import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import ImamMalikProfile from './screens/ImamMalikProfile';
import MalikChatbot from './screens/MalikChatbot';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
  name="LoginScreen"
  component={LoginScreen}
  options={{ title: 'Login' }}
/>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ImamMalikProfile"
          component={ImamMalikProfile}
          options={{ title: 'Imam Malik Profile' }}
        />
        <Stack.Screen
          name="MalikChatbot"
          component={MalikChatbot}
          options={{ title: 'Ask Imam Malik' }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Wisdom of Four' }} />

        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MalikChatbot" component={MalikChatbot} />
<Stack.Screen name="HanifaChatbot" component={HanifaChatbot} />
<Stack.Screen name="ShafiiChatbot" component={ShafiiChatbot} />
<Stack.Screen name="AhmadChatbot" component={AhmadChatbot} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
