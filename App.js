import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import bazzar from'./pages/bazzar';
import roupafeminina from './pages/roupafeminina'
import roupafeminina2 from './pages/roupafeminina2'
import roupasmasculinas from './pages/roupasmasculinas'
import roupasmasculinas2 from './pages/roupasmasculinas2'
const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="bazzar">
      <Stack.Screen name="bazzar" component={bazzar}/>
      <Stack.Screen name="roupafeminina" component={roupafeminina}/>
      <Stack.Screen name="roupafeminina2" component={roupafeminina2}/>
      <Stack.Screen name="roupasmasculinas" component={roupasmasculinas}/>
      <Stack.Screen name="roupasmasculinas2" component={roupasmasculinas2}/>
     
    </Stack.Navigator>
  </NavigationContainer>
);
}