import React from 'react';

// 1. Importar o container de navegação
import { NavigationContainer } from '@react-navigation/native';
// 2. Importar o Stack Navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 3. Importar suas páginas
import Home from './src/pages/home';
import Quadras from './src/pages/quadras'; 
// (Se você não renomeou a função em quadras/index.tsx, mude aqui)

// 4. Criar o navegador
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // 5. O NavigationContainer DEVE envolver todo o app
    <NavigationContainer>
      <Stack.Navigator 
        // 6. Esconder o header padrão da navegação
        // (porque você já criou seu próprio componente <Header>)
        screenOptions={{ headerShown: false }} 
      >
        {/* 7. Definir quais telas seu app conhece */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quadras" component={Quadras} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}