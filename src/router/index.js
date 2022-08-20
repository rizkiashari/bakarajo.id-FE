import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Beranda, Masuk, Profile, Review, Tersimpan } from '../pages';
import BottomNavigator from '../components/molecules/BottomNavigator';
import PilihPeran from '../pages/PilihPeran';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Tersimpan"
        component={Tersimpan}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Review"
        component={Review}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="PilihPeran">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Masuk"
        component={Masuk}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PilihPeran"
        component={PilihPeran}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
