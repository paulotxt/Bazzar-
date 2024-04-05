import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import bazzar from './pages/bazzar';
import roupafeminina from './pages/roupafeminina'
import roupafeminina2 from './pages/roupafeminina2'
import roupasmasculinas from './pages/roupasmasculinas'
import roupasmasculinas2 from './pages/roupasmasculinas2'
import sobre from './pages/sobre'
import produtos from './pages/produtos'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs (){
  return (
    <Tab.Navigator initialRouteName="bazzartab">
      <Tab.Screen name="sobre" component={sobre} options={{headerShown: false}}/>
    <Tab.Screen name="bazzartab" component={bazzar} options={{headerShown: false}}/>
      <Tab.Screen name="produtos" component={produtos} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}
//initialRouteName="bazzar"
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="bazzarstack" component={Tabs} options={{title: "Bazzar"}} />
        <Stack.Screen name="roupafeminina" component={roupafeminina} options={{title: "Cardigan Feminino Em Tricô"}} />
        <Stack.Screen name="roupafeminina2" component={roupafeminina2} options={{title: "Vestido Curto Com Linho"}} />
        <Stack.Screen name="roupasmasculinas" component={roupasmasculinas} options={{title: "Camiseta Masculina  Com Bolso"}} />
        <Stack.Screen name="roupasmasculinas2" component={roupasmasculinas2} options={{title: "Calça Masculina Reta Em Rami"}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}