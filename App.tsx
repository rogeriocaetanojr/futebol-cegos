import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home';
import Quadras from './src/pages/quadras'; 
import Agendas from './src/pages/agendas';
import Perfil from './src/pages/perfil';
import Contato from './src/pages/contato';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator 
       
        screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quadras" component={Quadras} />
        <Stack.Screen name="Agendas" component={Agendas} />
        <Stack.Screen name="Perfil" component={Perfil} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}