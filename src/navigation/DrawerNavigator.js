import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import * as Font from 'expo-font';
import TabNavigator from './TabNavigator';
import ExerciciosScreen from '../screens/ExerciciosScreen';
import JogosScreen from '../screens/JogosScreen';
import VideoScreen from '../screens/VideoScreen';
import LogoTitle from '../components/LogoTitle';
import { Text, ActivityIndicator, Image } from 'react-native';
import Exercicio from '../screens/Exercicio';
import SobreScreen from '../screens/SobreScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'ChalkboardSE-Regular': require('../../assets/fonts/ChalkboardSE-Light.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerStyle: { backgroundColor: '#32620e' },
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Image 
          style={{ width: 200,
           height: 200,
            marginRight: 10 }} 
            resizeMode="contain"
            source={require("../../assets/1.png")} />
        ),
        headerRight: () => <LogoTitle />,
      }}>
      <Drawer.Screen name="Inicio" component={TabNavigator} />
      <Drawer.Screen name="Exercícios" component={Exercicio} />
      <Drawer.Screen name="Todos os Exercícios" component={ExerciciosScreen} />
      <Drawer.Screen name="Video aulas" component={VideoScreen} />
      <Drawer.Screen name="Jogos" component={JogosScreen} />
      <Drawer.Screen name="Sobre" component={SobreScreen} />
      
    </Drawer.Navigator>
  );
}
