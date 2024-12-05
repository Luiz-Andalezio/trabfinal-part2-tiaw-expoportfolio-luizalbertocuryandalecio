//Dica: No Expo Go, pode ser que os botões demorem para responder, então, é só clicar várias vezes que funciona!
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import ItinerarioFormativo from './ItinerarioFormativo';
import AtuacaoProfissional from './AtuacaoProfissional';
import Projetos from './Projetos';
import FamiliaAmigosHobby from './FamiliaAmigosHobby';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Itinerário Formativo" component={ItinerarioFormativo} />
        <Tab.Screen name="Atuação Profissional" component={AtuacaoProfissional} />
        <Tab.Screen name="Projetos" component={Projetos} />
        <Tab.Screen name="Família/Amigos/Hobby" component={FamiliaAmigosHobby} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
