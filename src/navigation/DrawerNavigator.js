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
import { Text, ActivityIndicator } from 'react-native';
import Exercicio from '../screens/Exercicio';

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
          <Text
            style={{
              fontSize: 35,
              fontWeight: '600',
              color: 'white',
              paddingRight: 16,
              fontFamily: 'Cursive',
            }}>
            Tartamat
          </Text>
        ),
        headerRight: () => <LogoTitle />,
      }}>
      <Drawer.Screen name="Inicio" component={TabNavigator} />
      <Drawer.Screen name="Exercícios" component={ExerciciosScreen} />
      <Drawer.Screen name="Video aulas" component={VideoScreen} />
      <Drawer.Screen name="Jogos" component={JogosScreen} />
      
    </Drawer.Navigator>
  );
}
