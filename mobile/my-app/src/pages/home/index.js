import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import main from "./main/index.js"
import perfil from './perfil/index.js'
import addPubli from './addPublicacao/index.js';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="main" component={main} />
      <Tab.Screen name="Perfil" component={perfil} />
      <Tab.Screen name="Criar publicação" component={addPubli} />
    </Tab.Navigator>
  );
}