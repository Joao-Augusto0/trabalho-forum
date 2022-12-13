import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home/index.js';
import Login from './src/pages/login/index.js';
import cadastro from './src/pages/home/cadastro/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="cadastro" component={cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}